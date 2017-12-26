const mongoose = require('mongoose')
const Thread = require('../models/Thread')
const Message = require('../models/Message')
const messageChecker = require('../util/messageChecker')
const User = require('../models/User')

module.exports = {
    chatRoom:{
        get: (req, res) => {
            let currentUser = req.user.username
            let otherUser = req.params.username

            Thread.findOne({users: {$all:[currentUser, otherUser]}})
                .then(existingThread => {
                    if(!existingThread){
                        return res.redirect('/?error=Thread no longer exists')
                    }

                    let data = {}

                    User.findOne({username:otherUser})
                        .then(secondUser => {
                            if(!secondUser){
                                return res.redirect('/?error=User no logner exists')
                            }
                            if(!secondUser.blockedUsers){
                                secondUser.blockedUsers = []
                                secondUser.save()
                            } else{
                                if( secondUser.blockedUsers.indexOf(req.user._id) !== -1){
                                    data.blocked = true
                                }
                            }
                        })

                    Message.find({thread: existingThread._id})
                        .sort({dateCreated: 1})
                        .populate('user')
                        .then(messages => {
                            data.messages = messages
                            res.render('thread/chat-room', data)
                        })
                        .catch(console.warn)
                })
        },
        post: (req, res) => {
            let currentUser = req.user.username
            let otherUser = req.params.username
            let messageContent = req.body.content

            Thread.findOne({users:{$all:[currentUser, otherUser]}})
                .then(existingThread =>{
                    if(!existingThread){
                        return res.redirect('/?error=Thread no longer exists')
                    }

                    let messageData = {
                        thread: existingThread._id,
                        content: messageContent,
                        user: req.user._id,
                        dateCreated: Date.now(),
                        isLink: messageChecker.isLink(messageContent),
                        isImage: messageChecker.isImage(messageContent)
                    }

                    Message.create(messageData)
                        .then(msgContent => {
                            res.redirect(`/thread/${otherUser}`)
                        })
                        .catch((err)=>{
                            res.redirect(
                                `/thread/${otherUser}?error=${err.errors.content.message}`
                            )
                        })
                })
            // return res.redirect(`/thread/${otherUser}`)
        }
    }
}