'use strict'
var modelAsistente = require('../models/Asistente.model');

function getAsistentes(req, res) {
    modelAsistente.find((err, asistente) => {
        res.json(asistente)
    })
}

function saveAsistente(req, res) {
    var asistente = new modelAsistente()
    var params = req.body;

    asistente.cedula = params.cedula;
    asistente.nombre = params.nombre;
    asistente.fecha = params.fecha;

    asistente.save((err, asistenteStored) => {
        if (err) res.status(500).send({ message: `Error al guardar los datos ${err}` })
        if (!asistenteStored) res.status(400).send({ message: `Error al guardar los datos ${err}` })
        res.status(200).send({ asistente: asistenteStored })
    })

}

module.exports = {
    getAsistentes,
    saveAsistente
}