const fs = require('fs');
const statusHeader = '/StatusHeader';
const statusString = './views/status.html';


module.exports = (req, res)=>{
    if(req.pathname === statusHeader && req.method === 'GET'){
        fs.readFile(statusString, (err, data)=>{
            if(err){
                console.log(err);
                return;
            }
            res.writeHead(200, {
                'content-type':'text/html'
            })
            res.write(data);
            res.end();
        })
    }else{
        return true;
    }
}