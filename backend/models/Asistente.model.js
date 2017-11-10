'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var AsistenteSchema = schema({
    cedula:String,
    nombre:String,
    fecha:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Asistente', AsistenteSchema);