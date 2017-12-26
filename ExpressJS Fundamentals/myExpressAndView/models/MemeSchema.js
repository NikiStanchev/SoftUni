const mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

let meme = new mongoose.Schema({
    memeName:{type:String, required:true},
    genreSelect:{type:String, required:true},
    status:{type:String},
    memePath:{type:String, required:true},
    memeDescription:{type:String},
    dateOfCreation:{type: Date, default: Date.now()}
})

module.exports = mongoose.model('Meme', meme)