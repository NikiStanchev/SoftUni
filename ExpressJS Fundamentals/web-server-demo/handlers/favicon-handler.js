const fs = require('fs');
const favIcon = '/favicon.ico';
module.exports = (req, res) => {
    if(req.path === favIcon){
        fs.readFile('.' + favIcon, (err, data) => {
            if(err){
                console.log(err.message);
                return;
            }
            res.writeHead(200, {
                'content-type':'image/x-icon'
            });
            res.write(data);
            res.end();
        });
    } else{
        return true;
    }
}