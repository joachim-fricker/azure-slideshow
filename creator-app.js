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

// add our data folder - if this works i have to check how i can make this configurable
app.use(express.static(path.join(__dirname, '../../data')));


var data = [
    {
        name: 'node1', id: 1,
        children: [
            { name: 'child1', id: 2 },
            { name: 'child2', id: 3 }
        ]
    },
    {
        name: 'node2', id: 4,
        children: [
            { name: 'child3', id: 5 }
        ]
    }
];

app.get('/', function(req, res) {
    res.sendFile('creator.html', { root: path.join(__dirname, 'public') });
});


// for the slideshow the request will then look like slideShow?album=09-10_Chile

app.get('/getFolders*', function(req, res) {
	console.log("requesting the folder list");
    //res.sendFile('slideShow.html', { root: path.join(__dirname, 'public') });
	res.json(data)
});

module.exports = app;
