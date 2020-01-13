var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});


app.get('/slideShow', function(req, res) {
	console.log("value of foo is:", req.query.foo);
    res.sendFile('slideShow.html', { root: path.join(__dirname, 'public') });
});

module.exports = app;
