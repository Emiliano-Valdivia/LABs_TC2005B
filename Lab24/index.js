const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const log = console.log;

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public')));

const controller = require("./index.controller.js")

app.get('/products', controller.products);
app.post('/add_product', controller.add_product);
app.get('/prepare_million_products', controller.prepare_million_products);

// Iniciar el servidor
app.listen(3000, () => {
    log('Server listening to port 3000');
});

/*
¿Qué importancia tiene AJAX en el desarrollo de RIA's (Rich Internet Applications?
Una RIA ofrece una experience de usuario similar a una aplicación de escritorio en un formato de aplicación web, permitiendo una interactividad
más fluida y responsiva que una página web normal.
Algunas de las funciones que AJAX añade a este tipo de aplicación son la actualización de partes específicas de oáginas sin recargarlas por
completo, algo que vuelve a las páginas más rápidas y fluidas.
AJAX también permite minimizar la cantidad de datos que se transfieren para reducir el tiempo de carga de la página; permite interacción en tiempo
real con la página al actualizar solo partes de ella; y permite crear componentes que se comunican con el servidor de manera autónoma.

¿Qué implicaciones de seguridad tiene AJAX? ¿Dónde se deben hacer las validaciones de seguridad, del lado del cliente o del lado del servidor?
Aunque AJAX ofrece muchas ventajas, su capacidad para manipular el DOM en tiempo real puede ser explotada por atacantes para introducir
contenidos maliciosos al sitio a través de modificaciones al codigo de JavaScript; es por esto que no se debe dejar la validación de datos solo al lado
del cliente. Las validaciones de seguridad siempre deberían ser hechas desde el lado del servidor, pues puede evitar la manipulación por parte del usuario
y mantener control total sobre los datos.

¿Qué es JSON?
JavaScript Object Notation es un formato de texto que es fácil de interpretar para las máquinas y fácil de escribir por un humano.
Es conveniente por ser compatible con la gran mayoría de lenguajes de programación modernos, además de ser muy ligero y rápido de analizar
cuando se debe hacer intercambio de datos.
*/