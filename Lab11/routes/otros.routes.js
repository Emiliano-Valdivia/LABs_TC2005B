const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/topos',(request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');    
        response.write(`
            Dato sobre los topos: A pesar de que el topo comun es practicamente ciego, un nuevo estudio sugiere que lo compensan con un sentido del olfato estereofonico.
        `);
    response.end();
});

router.get('/ej_html',(request, response, next) => {
    response.setHeader('Content-Type', 'text/html');    
            response.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>Código en HTML</title>
                </head>
                <body>
                <h1>Package.json</h1>
                <p>Este archivo contiene información necesaria sobre un proyecto, esto incluye cosas como el nombre, versión, descripción, dependencias, entro otros.</p>
                </body>
                </html>
            `);
            response.end();
});

module.exports = router;