const mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

let genre = new mongoose.Schema({
    genreName:{type:String, required:true},
    memeList:[{type:ObjectId, red:'Meme'}]
})

module.exports = mongoose.model('Genre', genre)

