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
El control de acceso basado en roles es un sistema que otorga diferentes permisos, capacidades y características
a los usuarios dentro del mismo dependiendo del rol que ocupan dentro de una organización. En lugar de asignar esto
a los usuarios individualmente, definir roles a lo que serán asignados los usuarios es más fácil y rápido.

En un hipotético sistema de gestión de logística que utiliza RBAC se podrían tener grandes ventajas, como la mayor seguridad que
proporciona el segmentar en roles el sistema; de este modo un empleado de inventario no podría acceder a las herramientas
de un supervisor o transportista; asegurando que los procesos de la empresa sean robustos y seguros por dentro.
Sin embargo, la desventaja que esto trae es que un sistema como este sería muy caro y tardado de implementar, pues se tiene que
tener en cuenta una gran cantidad de roles y la forma en la que estos deben interactuar para que el sistema sea funcional.

En el caso de un hipotético sistema de trabajo grupal con diferentes archivos en el que no se necesitan roles, se pueden asignar 
permisos individualmente a los usuarios en caso de ser necesarios, pero en caso de no serlos esto permitiria al equipo completo tener 
un mayor control general sobre las acciones que se toman, posiblemente haciendo el trabajo más cómodo en algunas ocasiones.
Sin embargo esto también puede ser una desventaja, ya que si se deja que todos puedan hacer lo que les plazca podría llegar el caso
en el que alguien abuse de estos privilegios y potencialmente cause un daño en el trabajo.
Otra desventaja que se podría llevar en este sistema es que si se definen permisos individuales por usuario, inevitablemente
se volverá muy tardado y frustrante añadirlos todos o editarlos cuando se requiera algun cambio en los mismos.
*/