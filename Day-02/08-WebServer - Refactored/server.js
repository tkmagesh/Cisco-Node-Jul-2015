var http = require("http");
var path = require("path");

var dataParser = require("./middlewares/dataParser");
var staticResourceServer = require("./middlewares/staticResourceServer");
var calculatorProcessor = require("./app/calculatorProcessor");
var notFoundAction = require("./middlewares/notFoundAction");
var router = require("./middlewares/router");

var app = require("./middlewares/app");

router.post("/calculator", calculatorProcessor);

app.use(dataParser);
app.use(staticResourceServer(path.join(__dirname, "./public")));
app.use(router);
app.use(notFoundAction);

http.createServer(app).listen(9090);
console.log("Server listening on port 9090!");
