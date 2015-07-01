var http = require("http");
var path = require("path");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
var calculator = require("./calculator");


var staticResourceExtns = [".html",".css",".js",".jpg",".png",".txt",".json",".ico"];

function isStaticResource(resourceName){
    return staticResourceExtns.indexOf(path.extname(resourceName)) !== -1;
}

var server = http.createServer(function(req, res){
    req.url = url.parse(req.url);
    req.query = qs.parse(req.url.query);
    if (isStaticResource(req.url.pathname)){
        var resourcePath = path.join(__dirname, req.url.pathname);
        if (!fs.existsSync(resourcePath)){
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.createReadStream(resourcePath).pipe(res);
    } else if (req.url.pathname === "/calculator"){
        if (req.method === "GET"){
          var n1 = parseInt(req.query.n1,10),
              n2 = parseInt(req.query.n2,10),
              operation = req.query.operation;

          var result = calculator[operation](n1, n2);
          res.write(result.toString());
          res.end();
        } else {
            var data = '';
            req.on('data', function(chunk){
                data += chunk;
            });
            req.on('end', function(){
                req.body = qs.parse(data);
                 var n1 = parseInt(req.body.n1,10),
                      n2 = parseInt(req.body.n2,10),
                      operation = req.body.operation;

                  var result = calculator[operation](n1, n2);
                  res.write(result.toString());
                  res.end();
            });

        }
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(9090);
console.log("Server listening on port 9090!");


/*
/calculator?n1=100&n2=200&operation=add
*/
