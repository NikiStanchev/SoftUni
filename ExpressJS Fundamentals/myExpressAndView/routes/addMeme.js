let express = require('express');
let router = express.Router();

const Genre = require('../models/GenreSchema')
const Meme = require('../models/MemeSchema')


/* GET addMeme listing. */
router.get('/', function(req, res, next) {

  Genre.find({}).then((foundGenres)=>{
    let tags = []

    for(let genre of foundGenres){
      tags.push(genre.genreName)
    }
    res.render('addMeme', {tags})
  })
}).post('/', (req, res, next)=>{
    let file = req.files.meme
    let memeObj = req.body
    let filePath = `./${file.name}`
    memeObj.memePath = filePath

    file.mv(filePath, (err)=>{
      if(err){
        console.log(err)
      }  
    })
  
    Meme.create(memeObj).then((newMeme)=>{
      //let targetGenre = memeObj.genreSelect
      res.render('addMeme', {status:true})
      // Genre.findOne({genreName:targetGenre}).then((foundGenre)=>{
      //   foundGenre.memeList.push(targetGenre._id)
      //   foundGenre.save().then(()=>{
      //     res.render('addMeme', {status:true})
      //   })
      // })
    })
})

module.exports = router;
