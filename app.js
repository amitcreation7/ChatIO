var express = require('express');
var app = express();
var port = 3000;

app.get('*',function(req,res){
//res.set("Content-type":"text/html");
    res.sendFile(__dirname+'/public/index.html');
});
app.listen(port,function(){
    console.log('Server running at localhost:'+port);
});