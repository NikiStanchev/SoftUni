const Article = require('mongoose').model('Article');

module.exports = {
  index: (req, res) => {

      Article.find({}).limit(6).then(articles =>{
          res.render('home/index', {articles});
      });
  }
};