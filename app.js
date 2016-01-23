'use strict';

var PORT = 4000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var marked = require('marked');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
  var html = fs.readFileSync('./index.html').toString();
  res.send(html);
});


app.post('/markdown', function(req, res) {
  var markBody = req.body.markBody;

  var markText = marked(markBody);
  res.send(markText);
});

app.listen(PORT, function() {
  console.log('Express server listening on port', PORT)
});