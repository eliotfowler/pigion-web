var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendfile('build/index.html', { root: __dirname });
});

app.listen(process.env.PORT || 5000);

