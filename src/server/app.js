const express = require('express');
const morgan = require('morgan');
const path = require('path');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var userRoutes = require('./routes/users');
var productRoutes = require('./routes/products');
var loginRoutes = require('./routes/login');
var orderRoutes = require('./routes/orders');


const app = express();


app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(path.resolve(__dirname, '..', 'build', '../../')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/', loginRoutes);
app.use('/orders', orderRoutes);


// mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/b2b_db');


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', '../../index.html'));
});




module.exports = app;