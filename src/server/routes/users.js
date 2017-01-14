var cookie = require('react-cookie');
var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

router.get('/users', function(req, res) {
    User.find({},'email password name firstName address',function (err, users) {
        if (err) return handleError(err);
        res.send(users);
    });
});

router.post('/users', function(req, res) {
    var newUser = new User({ email:req.body.email, password:req.body.password, name:req.body.name, firstName:req.body.firstName, address:req.body.address})
    newUser.save(function (err, newUser) {
        if (err) return console.error(err);
    });
    res.redirect('/');
});

router.get('/users/:id', function(req, res) {
    User.findOne({ 'email': req.params.id },'email password name firstName address',function (err, user) {
        if (err) return handleError(err);
        res.json(user);
    });
});

router.post('/login', function(req, res) {
    if (req.body.email != null || req.body.password != null) {
        User.findOne({'email': req.body.email}, 'email password', function (err, user) {
            if (err) return handleError(err);
            if (req.body.password != null && req.body.password == user.password) {
                res.cookie('userId', user.email);
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
