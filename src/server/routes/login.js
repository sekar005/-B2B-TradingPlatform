var cookie = require('react-cookie');
var express = require('express');
var User = require('../models/user');
var router = express.Router();


router.post('/login', function(req, res) {
    var password = req.body.password;
    var email = req.body.email;
    if (email != null && password != null) {
        User.findOne({'email': req.body.email}, 'email password', function (err, user) {
            if (err) return handleError(err);
            if (password != null && user != null && password == user.password ) {
                res.cookie('userId', user.id);
                res.redirect('/#/viewUserProfile');
            } else {
                res.redirect('/');
            }
        });
    } else {
        res.redirect('/');
    }

});


router.get('/logout', function(req, res) {
    res.cookie('userId', "");
    res.redirect('/');
});


module.exports = router;