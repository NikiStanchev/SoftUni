const fs = require('fs');
const faviconPath = './public/images/favicon.ico';

let fileType = (dataString)=>{

    let dataTypes = {
        '.css' : 'text/css',
        '.js' : 'application/javascript',
        '.png' : 'image/png',
        '.jpg' : 'image/jpg',
        '.ico' : 'image/x-icon'
    }

    for(let type in dataTypes){
        if(dataString.endsWith(type)){
            return dataTypes[type];
        }
    }
}

let favHandler = (req, res)=>{
    fs.readFile(faviconPath, (err, data)=> {
        if(err){
            console.log(err);
            return;
        }

        res.writeHead(200, {
            'content-type':fileType(req.pathname)
        });

        res.write(data);
        res.end();
    });
}

let resData = (req, res)=>{
    fs.readFile('.' + req.pathname, (err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.writeHead(200, {
            'content-type':fileType(req.pathname)
        });
        res.write(data);
        res.end();
    });
}

module.exports = (req, res)=>{
    if(req.pathname === '/favicon.ico' && req.method === 'GET'){
        favHandler(req,res);
    } else if(req.pathname.startsWith('/public/') && req.method === 'GET'){
        resData(req, res);
    } else{
        res.end();
    }
}