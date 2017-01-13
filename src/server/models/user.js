var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    email: {type:String,required:true},
    name: String,
    firstname: String,
    address: String,
    password: {type:String,required:true}
});


module.exports = mongoose.model('User', User);
