'use strict'

var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var routeAsistentes = require('./routes/asistente.router')

var cors = require('cors');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors());

app.use('/api', routeAsistentes)

module.exports = app

