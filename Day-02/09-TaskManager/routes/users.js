var express = require('express');
var router = express.Router();

/* GET users listing. */
// GET - /users/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next){
    res.send('A new html will be served in future!');
})
module.exports = router;
