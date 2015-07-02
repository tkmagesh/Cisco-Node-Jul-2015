var http = require("http");

var dataParser = require("./dataParser");
var staticResourceServer = require("./staticResourceServer");
var calculatorProcessor = require("./calculatorProcessor");
var notFoundAction = require("./notFoundAction");

var app = require("./app");

app.use(dataParser);
app.use(staticResourceServer);
app.use(calculatorProcessor);
//app.use(notFoundAction);

http.createServer(app).listen(9090);
console.log("Server listening on port 9090!");
