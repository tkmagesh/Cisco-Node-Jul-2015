var net = require("net");
var socket = net.connect(9090);
socket.setEncoding('utf8');
socket.on('data', function(chunk){
    var responseObj = JSON.parse(chunk);
    switch (responseObj.type){
        case  'watching' :
            console.log("Server will notifiy changes on " + responseObj.fileName);
            break;
        case 'changed' :
            console.log(responseObj.fileName + ' changed at ' + new Date(responseObj.timeStamp));
            break;
        default :
            console.log('unknown response');
    }
});
socket.on('error', function(){
    console.log('unexpected error');
});
