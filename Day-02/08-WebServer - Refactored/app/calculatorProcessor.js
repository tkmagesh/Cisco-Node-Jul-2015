var calculator = require("./calculator");
var qs = require("querystring");
module.exports = function(req,res, next){
  var n1 = parseInt(req.field("n1"),10),
      n2 = parseInt(req.field("n2"),10),
      operation = req.field("operation");

  var result = calculator[operation](n1, n2);
  res.write(result.toString());
  res.end();
}
