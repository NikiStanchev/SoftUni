const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const comment = new mongoose.Schema({
    creator:{type:ObjectId, ref:'User', required:true},
    title:{type:String, required:true},
    description:{type:String},
    creationDate:{type:Date, default:Date.now()}
})



module.exports = mongoose.model('Comment', comment)