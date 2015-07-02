var middlewares = [];

function app(req, res){
   function exec(middlewares){
        var first = middlewares[0];
        var remaining = middlewares.slice(1);
        var next = function(){
             exec(remaining);
        }
        if (typeof first === "function")
            first(req, res, next);
    }
    exec(middlewares);
}

app.use = function(middleware){
    middlewares.push(middleware);
}

module.exports = app;
