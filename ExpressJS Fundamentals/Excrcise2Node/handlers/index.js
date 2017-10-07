const homeHandler = require('./homeHandler');
const staticHandler = require('./staticHandler');
const movieHandler = require('./movieHandler');
const displayAll = require('./displayMoviesHandler');


module.exports = [homeHandler, movieHandler, displayAll, staticHandler];