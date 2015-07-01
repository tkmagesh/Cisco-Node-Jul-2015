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


/*
var server = http.createServer(function(req, res){
    dataParser(req, res);
    staticResourceServer(req, res);
    calculatorProcessor(req, res);

    //IF the following line is uncommented, no static resource will be served even if they exist.

    //if the following line is commented, the browser will keep waiting for the response when the user requests for a non existing resource (ex. http://localhost:9090/someJunk)


    //notFoundAction(req, res);
});
*/

/*
/calculator?n1=100&n2=200&operation=add
*/
