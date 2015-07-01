var fs = require("fs");

/*
fs.readFile("test.txt", {encoding : 'utf8'}, function(err, data){
    if (!err){
        console.log(data);
        console.log("==========EOF==========");
    } else {
        console.log("unexpected error " , err);
    }
});
*/


var stream = fs.createReadStream("test.txt", {encoding : "utf8"});

/*
stream.on("data", function(chunk){

    console.log(chunk);
});
stream.on("end", function(){

   console.log("==========EOF==========");
});
stream.on("error", function(err){
    console.log("unexpected error " , err);
});
*/

stream.pipe(process.stdout);
