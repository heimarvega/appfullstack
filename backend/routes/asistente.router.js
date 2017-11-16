var express = require('express');
var router = express.Router();
var asistenteController = require('../controllers/Asistente.controller');
var md_auth = require('../middlewares/autenticated');

router.get('/asistentes', md_auth.ensureAuth, asistenteController.getAsistentes);
router.post('/asistente',asistenteController.saveAsistente);
router.get('/asistente/:id',asistenteController.getAsistente);
router.put('/asistente/:id',asistenteController.updateAsistente);
router.delete('/asistente/:id',asistenteController.deleteAsistente);
router.post('/asistenteToken',asistenteController.LoginAsistente);
module.exports = router;