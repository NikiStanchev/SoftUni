const fs = require('fs');
const db = require('./../config/dataBase');
const moviePath = '/movies/details/';
const movieString = './views/details.html';

module.exports = (req, res)=>{ 
    let re = /[0-9]+/g;
    let str = req.pathname;
    let arr = str.match(re);
    let id = 11111111111;
    if(arr !== null){
        id = arr[0];
    }

    if(req.pathname === moviePath + id && req.method === 'GET'){
        fs.readFile(movieString, (err, data)=>{
            if(err){
                console.log(err);
                return;
            }

            let replaceString = '<div class="content">';
            replaceString += `<img src="${decodeURIComponent(db[id].moviePoster)}" alt=""`;
            replaceString += `<h3>Title ${decodeURIComponent(db[id].movieTitle).replace(/[+]/g, ' ')}</h3>`;
            replaceString += `<h3>Year ${db[id].movieYear}</h3>`;
            replaceString += `<p>${decodeURIComponent(db[id].movieDescription).replace(/[+]/g, ' ')}<p>`;
            replaceString += '</div>';

            data = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', replaceString);


            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
}