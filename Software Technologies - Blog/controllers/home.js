const Article = require('mongoose').model('Article');

module.exports = {
  index: (req, res) => {


      Article.find({}).populate('author').then(articles =>{
          res.render('home/index', {articles});

          //set the length of the content to maximal 100 symbols
          articles.forEach(function(article) {
              if(article.content.length > 100){
                  article.content = article.content.substring(0,100) + ' ...';
              }
          });

          //set the length of the products to maximal 35 symbols
          articles.forEach(function(article) {
              if(article.products.length > 35){
                  article.products = article.products.substring(0,35) + ' ...';
              }
          });

      });
  }
};