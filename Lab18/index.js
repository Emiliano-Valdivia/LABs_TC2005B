const http    = require('http');
const express = require('express');
const path    = require('path');
const app     = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const session = require('express-session');
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const mariadb = require("mariadb");
const pool = mariadb.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"DBM4n4ger.",
    database: "test",
    connectionLimit:5,
    port:3310
});


app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("Hola Mundo");
    response.end(); 
});

app.get("/test_ejs",(request,response,next)=>{
    response.render("usuarios/login");
});

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);

/*COOKIES */
app.get('/test_cookie', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Set-Cookie', 'mi_cookie=123; HttpOnly');
    response.send("Hola Mundo");
    response.end(); 
});

app.get('/test_value_cookie', async(request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.cookies.mi_cookie);
    response.end(); 
});

app.get('/test_session', async(request, response, next) => {
    request.session.mi_variable = "valor"
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.session.mi_variable);
    response.end(); 
});


app.get('/test_session_variable', async(request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.session.mi_variable);
    response.end(); 
});

app.get('/logout', async(request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
});

app.get('/test_db', async(request, response, next) => {
    let conn;

    try{
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM books")
        console.log(rows);
        const jsonS = JSON.stringify(rows);
        response.writeHead(200, {'Content-type':'text/html'});
        response.end(jsonS);
    }catch(e){
        console.log(e)
    }
});



const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);

/*
Algunos otros métodos de autenticación son:

Autenticación biométrica: Este tipo de autenticación verifica la identidad de una persona con base en sus características biológicas, como las huellas dactilares, la cara o la retina del ojo

Autenticación por token: En este caso cuando un usuario inicia su sesión se genera un token, una especie de "boleto" que verifica la identidad del usuario
y asegura que no deba volver a ingresar sus credenciales en la plataforma hasta que el token expire.

Autenticación por TOTP: El TOTP (Time based One Time Password) es una contraseña de un uso que se genera y expira cada pocos segundos para mantener un nivel de seguridad
mayor.

Autenticación multifactor: La autenticación combina diferentes métodos junto con una contraseña; estos pueden ser contraseñas de un uso, datos biométricos
mensajes de texto, confirmación mediante aplicación, etc.
*/