var express = require('express');
var router = express.Router();
var asistenteController = require('../controllers/Asistente.controller');

router.get('/asistentes', asistenteController.getAsistentes);
router.post('/asistente',asistenteController.saveAsistente);

module.exports = router;