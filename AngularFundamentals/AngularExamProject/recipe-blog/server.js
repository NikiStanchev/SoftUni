const express = require('express');
const app = express();
const path = requre('path');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

// PathlocationStategie

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log('Console listening!');

