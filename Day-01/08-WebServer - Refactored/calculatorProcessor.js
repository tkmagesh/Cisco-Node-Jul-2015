var calculator = require("./calculator");
module.exports = function(req,res){
    if (req.url.pathname === "/calculator"){
        if (req.method === "GET"){
          var n1 = parseInt(req.query.n1,10),
              n2 = parseInt(req.query.n2,10),
              operation = req.query.operation;

          var result = calculator[operation](n1, n2);
          res.write(result.toString());
          res.end();
        } else {
            /*
            Code at lines [16-21] does 'data parsing'. Hence refactor these code to dataParser.js
            */
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
    }
}
