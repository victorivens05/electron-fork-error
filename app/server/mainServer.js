"use strict";

var express = require('express');

var app = express();

var http = require('http').Server(app);

app.get('/', function (req, res) {
	res.send('hello world');
});

http.listen(3003, function () {
	console.log('Started server', new Date());
});
