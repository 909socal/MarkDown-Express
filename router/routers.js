'use strict';


var express = require('express');
var router = express.Router();
var fs = require('fs');
var marked = require('marked');


router.post('/', function(req, res) {
  var markBody = req.body.markBody;

  var markText = marked(markBody);
  res.send(markText);
});

module.exports = router;