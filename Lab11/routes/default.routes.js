const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"');
    response.end;
});

router.get('/alguna-ruta', (request, response, next) => {
    response.send('Otra ruta :D');
    response.end;
});

module.exports = router;