var cookie = require('react-cookie');
var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

router.get('/users', function(req, res) {
    User.find({},'email password name firstName address',function (err, users) {
        if (err) return handleError(err);
        res.json(users);
    });
});

router.post('/users', function(req, res) {
    if (req.body.password == req.body.doublePassword) {
        var newUser = new User({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            firstName: req.body.firstName,
            address: req.body.address
        })
        newUser.save(function (err, newUser) {
            if (err) return console.error(err);
        });
        res.redirect('/');
    } else {
        res.redirect('/#/register');
    }
});

router.get('/users/:id', function(req, res) {
    User.findById(req.params.id,'email password name firstName address',function (err, user) {
        if (err) return handleError(err);
        res.json(user);
    });
});

router.put('/users/:id', function(req, res) {
    if (req.body.email != null && req.body.oldPassword != null && req.body.newPassword == req.body.newPasswordDouble) {
        User.findById(req.params.id, 'email password name firstName address', function (err, user) {
            if (err) return handleError(err);
            if (req.body.oldPassword == user.password) {
                user.email = req.body.email;
                res.cookie('userId', req.body.email);
                user.name = req.body.name;
                user.firstName = req.body.firstName;
                user.address = req.body.address;
                user.password = req.body.newPassword;
                user.save();
            }
        });
    }
});

router.delete('/users/:id', function(req, res) {
    User.findByIdAndRemove(req.params.id,'email password name firstName address',function (err, user) {
        if (err) return handleError(err);
        res.json(user);
    });
});

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
