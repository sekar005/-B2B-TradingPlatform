var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    email: {type:String,required:true,unique: true},
    name: String,
    firstName: String,
    address: String,
    password: {type:String,required:true}
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


module.exports = mongoose.model('User', User);
