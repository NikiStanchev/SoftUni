const fs = require('fs');
const db = require('./../config/dataBase');
const moviePath = '/viewAllMovies';
const movieString = './views/viewAll.html';



module.exports = (req, res)=>{
    if(req.pathname === moviePath && req.method === 'GET'){
        fs.readFile(movieString, (err, data)=>{
            if(err){
                console.log(err);
                return;
            }
            
            let replaceString = '<div class="movie">';
            for(let movie in db){
                replaceString += `<a href="/movies/details/${movie}"><img class="moviePoster" src="${decodeURIComponent(db[movie].moviePoster)}"/>`;
            }
            replaceString += '</div>';

            data = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', replaceString);

            res.writeHead(200, {
                'content-type':'text/html'
            })
            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
    
}