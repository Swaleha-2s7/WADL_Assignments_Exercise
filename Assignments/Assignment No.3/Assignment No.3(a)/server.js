var express = require('express');
var app = express();

app.use(express.static('code'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/code'));
app.use('/js', express.static(__dirname + '/code'));

var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});