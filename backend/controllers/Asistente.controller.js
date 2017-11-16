
'use strict'
var modelAsistente = require('../models/Asistente.model');
var jwt = require('../Services/jwt');

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

function getAsistente(req,res){
var params = req.params.id;

modelAsistente.findById(params, (err,asistente) =>{
   if(err) return res.status(500).send({message:'Error en la consulta '+err+' '+params})
   if(!asistente) return res.status(404).send({message:'No existe el asistente'})
   res.status(200).send({asistente})
})
}

function updateAsistente(req,res){
    var params = req.params.id;
    var update= req.body;
    modelAsistente.findByIdAndUpdate(params,update, { new: true },(err,asistenteUpdate)=>{
        if(err) return res.status(500).send({message:'Error en la consulta'})
        if(!asistenteUpdate) return res.status(404).send({message:'No se actualizó el asistente'})
        res.status(200).send({asistente: asistenteUpdate})
        
    })
}

function deleteAsistente(req,res){
    var params = req.params.id;
    modelAsistente.findByIdAndRemove(params,(err,asistenteRemove)=>{
        if(err) return res.status(500).send({message:'Error al eliminar'})
        if(!asistenteRemove) return res.status(404).send({message:'No se eliminó el asistente'})
        res.status(200).send({message:'Asistente eliminado exitosamente'})
    })
}

function LoginAsistente(req, res){
    var params = req.body;
    modelAsistente.findOne({cedula : params.cedula},(err, asistente)=>{
        if(err) return res.status(500).send({message : 'Error al autenticar'})
        if(!asistente) return res.status(400).send({message: 'No se encontro asistente'})
        res.status(200).send({token: jwt.createToken(asistente)});
    });
}

module.exports = {
    getAsistentes,
    saveAsistente,
    getAsistente,
    updateAsistente,
    deleteAsistente,
    LoginAsistente
}