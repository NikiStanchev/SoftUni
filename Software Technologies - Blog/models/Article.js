const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

let articleSchema = mongoose.Schema({
    title:{ type:String, required:true },
    content:{ type:String, required:true },
    author:{ type:ObjectId, required:true, ref:'User' },
    date:{ type:Date, default:Date.now() },
    time:{ type:String, required:true},
    products:{ type:String, required:true }
});

//create the Model in the DB
const Article = mongoose.model('Article', articleSchema);
module.exports = Article;