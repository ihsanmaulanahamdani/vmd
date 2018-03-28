"use strict"

var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
  res.send('ini masih app');
});

let routeItems = require('./routes/items')
app.use('/items',routeItems)


app.listen(3000);
