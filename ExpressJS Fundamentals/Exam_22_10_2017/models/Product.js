const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    category:{type:String, required:true},
    size:{type:Number, required:true},
    imageUrl:{type:String},
    toppings:[{type:String}]
})

// productSchema.path('size').validate(function(){
//     return this.size.length >= 17 &&  this.size.length <= 24
// })

module.exports = mongoose.model('Product', productSchema)

