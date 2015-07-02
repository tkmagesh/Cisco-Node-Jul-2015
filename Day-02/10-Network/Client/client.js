var net = require("net");
var MyJSONParser = require("./MyJSONParser");
var socket = net.connect(9090);
socket.setEncoding('utf8');

var jsonParser = new MyJSONParser(socket);
jsonParser.on("message", function(responseObj){
    console.log(responseObj);
    switch (responseObj.type){
        case  'watching' :
            console.log("Server will notifiy changes on " + responseObj.fileName);
            break;
        case 'changed' :
            console.log(responseObj.fileName + ' changed at ' + new Date(responseObj.timeStamp));
            break;
        default :
            console.log('unknown response');
    };
});
jsonParser.on('error', function(){
    console.log('unexpected error');
});
