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



function f1(next){
    console.log("f1 initiated");
    setTimeout(function(){
        console.log("f1 done");
        if (typeof next === "function")
            next();
    },2000);
}

function f2(next){
    console.log("f2 initiated");
    setTimeout(function(){
        console.log("f2 done");
        if (typeof next === "function")
            next();
    },2000);
}

function f3(next){
    console.log("f3 initiated");
    setTimeout(function(){
        console.log("f3 done");
        if (typeof next === "function")
            next();
    },2000);
}

function f4(next){
    console.log("f4 initiated");
    setTimeout(function(){
        console.log("f4 done");
        if (typeof next === "function")
            next();
    },2000);
}


var fns = [f1, f2, f3, f4];

function run(fns){

}
run(fns);

