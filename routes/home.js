var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("WHAT TEH FUCK")
    //res.render('home', { title: 'Test' });
});

module.exports = router;
