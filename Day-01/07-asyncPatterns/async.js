function add(x,y){
    console.log("[SP] processing ", x , " and ", y);
    if (x % 2 === 0 && y % 2 === 0)
        throw new Error("Invalid arguments");
    var result =  x + y;
    console.log("[SP] returning result");
    return result;

}

function usingAdd(x,y){
    console.log("[SC] invoking add");
    try{
        var result = add(x,y);
        console.log("[SC] result = ", result);
    } catch (e){
        console.log("Sorry! Something went wrong!!");
    }
}

function addAsync(x,y, onResult){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        if (x % 2 === 0 && y % 2 === 0){
            var err = new Error("Invalid arguments");
            onResult(err, null);
            return;
        }
        var result =  x + y;
        console.log("[SP] returning result");
        onResult(null, result);
    },4000);
}

function usingAddAsync(x,y){
    console.log("[SC] invoking add");
    addAsync(x,y, function(err, result){
        if (err){
            console.log("Sorry! Something went wrong!!");
            return;
        }
        console.log("[SC] result = ", result);
    });
}


module.exports = usingAddAsync;
