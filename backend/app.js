'use strict'

var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var routeAsistentes = require('./routes/asistente.router')

var cors = require('cors');
var morgan =require('morgan');


var fs = require('fs')
var path = require('path') 
 
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'}) 
// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))




app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors());
//morgan por consola errores
app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
  }))

app.use('/api', routeAsistentes)

module.exports = app

