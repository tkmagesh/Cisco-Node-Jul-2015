var middlewares = [];

function app(req, res){
    for(var i=0; i<middlewares.length; i++)
        middlewares[i](req, res);
}

app.use = function(middleware){
    middlewares.push(middleware);
}

module.exports = app;
