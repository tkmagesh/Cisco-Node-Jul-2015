var http = require("http");
var path = require("path");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(req, res){
    console.log(req.url);
    var resourcePath = path.join(__dirname, req.url);
    if (!fs.existsSync(resourcePath)){
        res.statusCode = 404;
        res.end();
        return;
    }
    fs.createReadStream(resourcePath).pipe(res);
});
server.listen(9090);
console.log("Server listening on port 9090!");


/*
/calculator?n1=100&n2=200&operation=add
*/
