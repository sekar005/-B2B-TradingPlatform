/**
 * Created by pfeiffer on 16.01.2017.
 */
var cookie = require('react-cookie');
var express = require('express');
var Order = require('../models/order');
var router = express.Router();

router.get('/', function(req, res) {
    Order.find({},'orderNo date product company customer number price status',function (err, orders) {
        if (err) return handleError(err);
        res.json(orders);
    });
});

router.get('/:id', function(req, res) {
    Order.findById(req.params.id,'orderNo date product company customer number price status',function (err, order) {
        if (err) return handleError(err);
        res.json(order);
    });
});

router.post('/', function(req, res) {
        var newOrder = new Order({
            orderNo: req.body.orderNo,
            date: req.body.date,
            product: req.body.product,
            company: req.body.company,
            number: req.body.number,
            price: req.body.price,
            status: req.body.status
        })
        newOrder.save(function (err, newOrder) {
            if (err) return console.error(err);
        });
        res.redirect('/#/productSearch')
});


router.put('/:id', function(req, res) {
    if (req.body.orderNo != null && req.body.date != null && req.body.productId != null && req.body.company != null && req.body.customer != null &&
        req.body.number != null && req.body.price != null && req.body.state != null) {
        Order.findById(req.params.id, 'orderNo date product company customer number price status', function (err, order) {
            if (err) return handleError(err);
            order.orderNo = req.body.orderNo,
            order.date = req.body.date,
            order.product = req.body.product,
            order.company = req.body.company,
            order.customer = req.body.customer,
            order.number = req.body.number,
            order.price = req.body.price,
            order.status = req.body.status
            order.save();
        });
    }
});

router.delete('/:id', function(req, res) {
    Order.findByIdAndRemove(req.params.id,'orderNo date product company customer number price status',function (err, order) {
        if (err) return handleError(err);
        res.json(order);
    });
});



module.exports = router;