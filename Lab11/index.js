const http    = require('http');
const express = require('express');
const path = require('path');
const app     = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response, next) => {
  response.setHeader('Content-Type', 'text/plain');
  response.send("URL index /");
});

const rutasOtros = require('./routes/otros.routes');
app.use('/otros', rutasOtros);

const rutasDefault = require('./routes/default.routes');
app.use('/default', rutasDefault);

const rutasFormulario = require('./routes/formulario.routes');
app.use('/formulario', rutasFormulario);

app.use((request, response, next) => {
  console.log('Otro middleware!');
  response.status(404);
  response.send('¡Page Not Found!'); //Manda la respuesta
});


const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);