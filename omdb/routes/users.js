var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/search/', function(req, res, next) {
    res.send('respond with a resource or not');
});

module.exports = router;