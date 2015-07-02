var EventEmitter = require('events').EventEmitter;
var util = require("util");

function MyJSONParser(connection){
    EventEmitter.call(this);
    var data = '';
    var self = this;
    connection.on('data', function(chunk){
        data += chunk;
        while (data.indexOf('\n') !== -1){
            var jsonString = data.substr(0, data.indexOf('\n'));
            data = data.substr(data.indexOf('\n')+1);
            //parse it;
            var responseObj = JSON.parse(jsonString);
            self.emit("message", responseObj);
        }
    });
    connection.on("error", function(error){
        self.emit("error", error);
    });
}

util.inherits(MyJSONParser, EventEmitter);
module.exports = MyJSONParser;
