var cookie = require('react-cookie');
var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

router.post('/register', function(req, res) {
    var newUser = new User({ email:req.body.email, password:req.body.password, name:req.body.name, firstName:req.body.firstName, address:req.body.address})
    newUser.save(function (err, newUser) {
        if (err) return console.error(err);
    });
    res.redirect('/');
});

router.post('/login', function(req, res) {

    User.findOne({ 'email': req.body.email },'email',function (err, user) {
        if (err) return handleError(err);
        res.cookie('userId', user.email);
        res.redirect('/#/viewUserProfile');
    });

});

router.get('/logout', function(req, res) {
    req.mySession.email = "";
    res.redirect('/');
});


module.exports = router;
