const express = require('express');
const router = express.Router();
let Genre = require('../models/GenreSchema')


/* GET addGenre listing. */
router
    .get('/', function(req, res, next) {
        res.render('addGenre')
    }).post('/', (req, res, next)=>{ 
        let objParams = req.body
        Genre.create(objParams).then((obj)=>{
            res.render('addGenre', {status:true})
        }).catch((err)=>{
            console.log(err)
            return
        })

    })

module.exports = router;
