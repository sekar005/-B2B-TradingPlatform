/**
 * Created by skarrie on 18.01.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    product: {type: String,  required: true},
    category: {type: String,  required: true},
    price: {type: String,  required: true}
},
    {
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

module.exports = mongoose.model('Product', Product);