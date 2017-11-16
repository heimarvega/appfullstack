'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_curso';

exports.createToken = function (asistente) {
    var payload = {
        sub: asistente._id,
        cedula: asistente.cedula,
        nombre: asistente.nombre,
        fecha: asistente.fecha,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };
    return jwt.encode(payload, secret);
}