const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/form', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const html = fs.readFileSync(path.resolve(__dirname, './../form.html'), 'utf8')
    response.write(html);
    response.end();  
});

router.post('/form', (request, response, next) => {
    const edad = Number(request.body.edad);
    console.log(edad);
    const nombre = request.body.nombre
    console.log(nombre);

    fs.writeFileSync("formulario.txt",
    "Tu nombre: " + nombre + "\n" + "Tu edad: " + edad
    );


    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write('Respuesta enviada, archivo creado');
    response.end();
});

module.exports = router;