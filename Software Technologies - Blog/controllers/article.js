//CRUD on Article
const Article = require('mongoose').model('Article');

function validateArticle(articleArgs, req) {
    let errorMsg = '';

    if(!req.isAuthenticated()){
        errorMsg = 'Sorry, you must be logged in!!';
    }else if(!articleArgs.title){
        errorMsg = 'Title is required!!';
    }else if(!articleArgs.content){
        errorMsg = 'Content is required!!';
    }

    return errorMsg;
}

module.exports = {
    createGet: (req, res) => {
        res.render('article/create');
    },

    createPost: (req, res) => {
        let articleParts = req.body;

        let errorMsg = validateArticle(articleParts, req);

        if(errorMsg){
            res.render('article/create', {error:errorMsg});
            return;
        }

        let userId = req.user.id;
        articleParts.author = userId;

        Article.create(articleParts).then(article => {
            req.user.articles.push(article.id);
            req.user.save(err => {
                if(err){
                    res.render('article/create', {error:err.message});
                }else {
                    res.redirect('/');
                }
            });
        });
    },

    detailsGet: (req, res) => {
        let id = req.params.id;

        Article.findById(id).populate('author').then(article => {

            res.render('article/details', article);
        })
    },

    editGet: (req, res) => {
        let id = req.params.id;

        Article.findById(id).then(article => {

            if(req.user === undefined || !req.user.isAuthor(article)){
                res.render('home/index', {error:'You cannot edit this article'});
                return;
            }
            res.render('article/edit', article);
        })
    },

    editPost: (req, res) => {
        let id = req.params.id;
        let articleArguments = req.body;

        let errorMsg = validateArticle(articleArguments, req);

        if(errorMsg){
            res.render('article/edit', {error:errorMsg});
        }

        Article.update({_id:id}, {$set:{
            title: articleArguments.title,
            content: articleArguments.content
        }}).then(err => {
            res.redirect('/');
        })
    },

    deleteGet: (req, res) => {

        let id = req.params.id;

        Article.findById(id).then(article => {
            res.render('article/delete', article);
        });
    },

    deletePost: (req, res) => {

        let id = req.params.id;

        Article.findByIdAndRemove(id).then(article => {
            let index = req.user.articles.indexOf(article.id);
            req.user.articles.splice(index, 1);
            req.user.save(err => {
                if(err){
                    res.redirect('/', {error:err.message});
                }
                else{
                    res.redirect('/');
                }
            })
        });
    }
};