const Product = require('../models/Product')
const Order = require('../models/Order')

module.exports = {
    index: (req, res) => {
        Product.find({}).then(prod=>{
            res.render('home/index', {prod})
            
            //res.render('home/index-admin', {prod})
            
        }) 
        
    },
    about: (req, res) => {
        res.render('home/about');
    },
    customizeOrder: (req, res) =>{
        let productId = req.query.id
        Product.findById(productId).then(foundPrd=>{
            res.render('home/customize-order', {foundPrd})
        })
    },
    createOrder: (req, res) =>{
        let toppings = Object.values(req.body)
        let userId = req.user._id
        let productId = req.query.id

        Product.findById(productId).then(foundPrd=>{
            let orderObj = {
            creator:userId,
            date:Date.now(),
            toppings:toppings,
            product:foundPrd
            }
            Order.create(orderObj).then(orderObj=>{
                res.render('home/order-details', {orderObj})
            })
        })    
    },

    orderDetails: (req, res) => {
        res.render('home/order-details')
    },
    orderStatus: (req, res) => {
        let userId = req.user._id
        Order.find({creator : userId})
            .sort({dateCreated: 1})
            .then(orders=>{
            res.render('home/order-status', {orders})
            })        
    },
    indexAdminView: (req, res) => {
        res.render('home/index-admin')
    },
    createProductView: (req, res) => {
        res.render('home/create-product')
    },
    createProduct: (req, res) => {
        let bodyParams = req.body
        let toppingsList = bodyParams.toppings.split(',')


        let productObj = {
            category:bodyParams.category,
            size:Number(bodyParams.size),
            imageUrl:bodyParams.imageUrl,
            toppings:toppingsList
        }

        Product.create(productObj)
            .then(prd => {
                res.redirect('back')
            })
    }
};