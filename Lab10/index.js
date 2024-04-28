const http = require('http'); 
const path = require('path');
const fs   = require('fs');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    
    switch(request.url){
        case "/":
            response.setHeader('Content-Type', 'text/plain');
            response.write(`URLs disponibles: 
            /topos
            /pag_html
            /Formulario
            `);
            response.end();   
            break;
        case "/topos":
            response.setHeader('Content-Type', 'text/plain');    
            response.write(`
                Dato sobre los topos: A pesar de que el topo común es prácticamente ciego, un nuevo estudio sugiere que lo compensan con un sentido del olfato estereofónico.
            `);
            response.end();
            break;
        case "/pag_html":
            response.setHeader('Content-Type', 'text/html');    
            response.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>Código en HTML</title>
                </head>
                <body>
                <h1>Esta página es una prueba de URL</h1>
                <p>La página parece estar funcionando correctamente.</p>
                </body>
                </html>
            `);
            response.end();   
            break;
        case "/Formulario":
            if(request.method == "GET"){
                response.setHeader('Content-Type', 'text/html');
                const html = fs.readFileSync(path.resolve(__dirname, './form.html'), 'utf8')
                response.write(html);
                response.end();  
             }else if(request.method == "POST"){
                let body = [];
                request
                .on('data', chunk => {
                    body.push(chunk);
                })
                .on('end', () => {
                    body = Buffer.concat(body).toString();
                    console.log(body)

                    const nombre = body.split('&')[0].split('=')[1];
                    const edad = Number(body.split('&')[1].split('=')[1]);

                    fs.writeFileSync("formulario.txt",
                        "Tu nombre: " + nombre + "\n" + "Tu edad: " + edad
                    );

                    response.setHeader('Content-Type', 'application/json');
                    response.statusCode = 200;
                    response.write('Respuesta enviada, archivo creado');
                    response.end();
                });  
            }
            break;
            default:
                response.statusCode = 404;
                response.end();
                break;
    }
    
});
server.listen(3000);
