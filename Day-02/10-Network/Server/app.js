var net = require("net");
var fs = require("fs");
var path = require("path");

var fileName = path.join(__dirname, process.argv[2]);
if (!fs.existsSync(fileName)){
    console.log("File does not exists! - " + fileName);
    return;
}

var server = net.createServer(function(connection){
    var msgObj = {
        type : 'watching',
        fileName : fileName
    };
    connection.write(JSON.stringify(msgObj) + "\n");

    fs.watchFile(fileName, function(){
        var msgObj = {
            type : 'changed',
            fileName : fileName,
            timeStamp : Date.now()
        };
        var responseString = JSON.stringify(msgObj);
        //connection.write(responseString);
        var responseString1 = responseString.substr(0,20);
        var responseString2 = responseString.substr(20) + "\n";
        connection.write(responseString1);
        setTimeout(function(){
            connection.write(responseString2);
        },3000);
    });
});

server.listen(9090);
console.log("server listening on port 9090");
