const mongoose = require('mongoose')
const productSchema = mongoose.model('Product').schema


const orderSchema = new mongoose.Schema({
    creator:{type:String, required:true},
    product:productSchema,
    date:{type:Date, default: Date.now()},
    status:{type:String, default:'Pending'},
    toppings:[{type:String}]
})

module.exports = mongoose.model('Order', orderSchema)

