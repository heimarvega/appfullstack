'use strict'

var mongoose = require('mongoose');
var config = require('./config');
var app = require('./app')

mongoose.connect(config.db,{useMongoClient: true},(err, res)=>{
    if (err) 
        return console.log('Error en conexión')
    app.listen(config.port, () => {
        console.log('Conexión a la bd exitosa!')
    })
    
})