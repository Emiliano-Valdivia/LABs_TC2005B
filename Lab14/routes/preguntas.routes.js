const express = require('express');
const router = express.Router();
const controller = require("../controllers/preguntas.controller.js")

router.get('/test_json', (req,res)=>{
    res.status(200).json({code: 200, msg:"Ok"});
});

router.get('/beneficios', controller.ventajas);
router.get('/desventajas', controller.desventajas);

module.exports = router;