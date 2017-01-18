/**
 * Created by skarrie on 18.01.2017.
 */
var cookie = require('react-cookie');
var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.get('/', function(req, res) {
    Product.find({},'product category price',function (err, product) {
        if (err) return handleError(err);
        res.json(product);
    });
});

router.get('/:id', function(req, res) {
    Product.findById(req.params.id,'product category price',function (err, product) {
        if (err) return handleError(err);
        res.json(product);
    });
});

router.post('/', function(req, res) {
        var productNew = new Product({
            product: req.body.product,
            category: req.body.category,
            price: req.body.price
        })
        productNew.save(function (err, productNew) {
            if (err) return console.error(err);
        });
        res.redirect('/#/viewCompany')
});

router.put('/:id', function(req, res) {
    if (req.body.product != null && req.body.category != null && req.body.price != null) {
        Product.findById(req.params.id, 'product category price', function (err, product) {
            if (err) return handleError(err);
            product.product = req.body.product,
                product.category = req.body.category,
                product.price = req.body.price
            product.save();
        });
    }
});

router.delete('/:id', function(req, res) {
    Product.findByIdAndRemove(req.params.id,'product category price',function (err, product) {
        if (err) return handleError(err);
        res.json(product);
    });
});



module.exports = router;