const homeHandler = require('./homeHandler');
const staticHandler = require('./staticHandler');
const movieHandler = require('./movieHandler');
const displayAll = require('./displayMoviesHandler');
const details = require('./detailsHandler');
const status = require('./statusHandler');



module.exports = [homeHandler, movieHandler, displayAll, details, status, staticHandler];