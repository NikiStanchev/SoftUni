const Category = require('mongoose').model('Category')

module.exports = {
    getView:(req, res)=>{
        res.render('cat/catForm')
    },
    createCat:(req, res)=>{
        
        Category.create({
            catName: req.body.category
        }).then((e)=>{
            res.redirect('/')
        })
    }
}