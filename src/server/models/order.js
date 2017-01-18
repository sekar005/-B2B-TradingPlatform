/**
 * Created by pfeiffer on 16.01.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Order = new Schema({
    orderNo:    {type: String,  required: true},
    date:       {type: String,  required: true},
    product:    {type: String,  required: true},
    company:    {type: String,  required: true},
    number:     {type: String,  required: true},
    price:      {type: String,  required: true},
    status:     {type: String,  required: true}
}, {
    toObject: {
        transform: function (doc, ret) {
            delete ret._id;
        }
    },
    toJSON: {
        transform: function (doc, ret) {
            delete ret._id;
        }
    }
});


module.exports = mongoose.model('Order', Order);
