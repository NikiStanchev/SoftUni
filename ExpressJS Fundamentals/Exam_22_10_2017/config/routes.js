const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);
    app.get('/about', controllers.home.about);
    app.get('/register', controllers.user.registerGet);
    app.post('/register', controllers.user.registerPost);
    app.post('/logout', controllers.user.logout);
    app.get('/login', controllers.user.loginGet);
    app.post('/login', controllers.user.loginPost);

    // Order
    app.get('/customize-order', controllers.home.customizeOrder)
    app.post('/customize-order', controllers.home.createOrder)
    app.get('/order-details', controllers.home.orderDetails)
    app.get('/order-status', controllers.home.orderStatus)

    // Admin
    app.get('/index-admin', controllers.home.indexAdminView)
    app.get('/create-product', controllers.home.createProductView)
    app.post('/create-product', controllers.home.createProduct)

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};