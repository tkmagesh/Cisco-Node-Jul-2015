var path = require("path");
var fs = require("fs");

var staticResourceExtns = [".html",".css",".js",".jpg",".png",".txt",".json",".ico"];

function isStaticResource(resourceName){
    return staticResourceExtns.indexOf(path.extname(resourceName)) !== -1;
}

module.exports = function(dirName){
    return function(req, res, next){
        if (isStaticResource(req.url.pathname)){
            var resourcePath = path.join(dirName, req.url.pathname);
            if (!fs.existsSync(resourcePath)){
                res.statusCode = 404;
                res.end();
                return;
            }
            console.log(req.url.pathname + " exists");
            fs.createReadStream(resourcePath).pipe(res);
        } else {
            next();
        }
    };
}
