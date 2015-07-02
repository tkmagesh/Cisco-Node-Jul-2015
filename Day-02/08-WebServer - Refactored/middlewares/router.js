var handlers = {
    GET : {},
    POST : {}
};

function router(req, res, next){
    var methodHandlers = handlers[req.method] || {};
    var handler = methodHandlers[req.url.pathname];
    if (typeof handler === "function"){
        handler(req, res, next);
    } else {
        next();
    }
}

router.get = function(url, handlerFn){
    handlers["GET"][url] = handlerFn;
};

router.post = function(url, handlerFn){
    handlers["POST"][url] = handlerFn;
};

module.exports = router;
