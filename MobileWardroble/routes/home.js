var express = require('express');
var router = express.Router();

router.get('/home', function(req, res, next) {
    var data = {
        title: '我的衣橱',
        time: (new Date).toString(),
    }
    res.render('home.art', data);
})

module.exports = router;