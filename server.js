var express = require('express');
var lowdb = require('lowdb');
var fileAsync = require('lowdb/lib/file-async');
var shortid = require('shortid');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

var db = lowdb('db.json', { storage: fileAsync });

db.defaults({
	// any default collections (Arrays)
}).value();

app.use(bodyParser());
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/dist'))
app.use(express.static(__dirname + '/lib'))


app.listen(port);