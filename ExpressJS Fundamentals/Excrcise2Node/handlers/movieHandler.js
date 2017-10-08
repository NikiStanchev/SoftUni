const fs = require('fs');
const qs = require('querystring');
const db = require('./../config/dataBase');
const moviePath = '/addMovie';
const movieString = './views/addMovie.html';


let getCreationForm = (req, res)=>{
    fs.readFile(movieString, (err, data)=>{
        if(err){
            console.log(err);
            return;
        }

        res.writeHead(200, {
            'content-type':'text/html'
        })
        res.write(data);
        res.end();
    });
}


module.exports = (req, res)=>{
    if(req.pathname === moviePath && req.method === 'GET'){
        getCreationForm(req, res);
    } else if(req.pathname === moviePath && req.method === 'POST'){
        let body = [];
        req
        .on('data', chunk => {
            body.push(chunk);
        })
        .on('end', ()=>{
            body = Buffer.concat(body).toString();
            let movieBody = qs.parse(body);
            movieBody.moviePoster = encodeURIComponent(movieBody.moviePoster);
            movieBody.movieTitle = encodeURIComponent(movieBody.movieTitle);
            movieBody.movieDescription = encodeURIComponent(movieBody.movieDescription);

            let validMovieFlag = true;

            for(let prop in movieBody){
                if(movieBody[prop] === ''){
                    validMovieFlag = false;
                }
            }
            if(validMovieFlag){
                db.push(movieBody);
                fs.readFile(movieString, (err, data)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    data = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', '<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>');
                    
                    res.writeHead(200, {
                        'content-type':'text/html'
                    });
                    res.write(data);
                    res.end();
                }); 
            } else{
                db.push(movieBody);
                fs.readFile(movieString, (err, data)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    data = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', '<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>');
                    res.writeHead(200, {
                        'content-type':'text/html'
                    });
                    res.write(data);
                    res.end();
                }); 
            }
        });
    } else{
        return true;
    }
}