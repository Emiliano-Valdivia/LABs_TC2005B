const http = require('http');   
const server = http.createServer( (request, response) => {    
     console.log(request.url);
     response.setHeader('Content-Type', 'text/html');
     response.write(`
     <!DOCTYPE html>
     <html lang="es">
     <!--<link rel="stylesheet" href="Lab3.css">-->
     <link rel="stylesheet" href="Lab3mini.css">
     <head>
         <meta charset="UTF-8" />
         <title>Laboratorio 1</title>
     </head>
     <body>
         <h1>
             Laboratorio 1
         </h1>
         <ol id="info">
             <li><strong>Nombre:</strong> Emiliano Valdivia Lara</li>
             <li><strong>Matricula:</strong> A01276258</li>
             <li><strong>Correo:</strong> A01276258@tec.mx</li>
         </ol>
         <p>
            Soy bastante nuevo a los temas de desarrollo de software, asi que no soy muy habil con tantos lenguajes.
            Puedo programar con C++ y Python, además de que puedo manipular bases de datos SQL.<br>
            Diría que aunque tengo más experiencia con C++ me gusta un poco más trabajar con Python ya que es 
            muy comodo y fácil de manipular.
         </p>
         <img src=".\python.png"
         alt="Logo de Python"
            height="210"
               width="400" />
         <p>
             Algunos de mis mayores intereses son escuchar música y jugar videojuegos, aunque en realidad ya no juego tantos videojuegos últimamente como lo hacia en el pasado. <br>
         </p>
     
         <ol id="Preguntas">
             <li><strong>¿Cuál es la diferencia entre Internet y la World Wide Web? </strong>
             En resumen, el internet son una red de computadoras conectadas entre sí a lo largo del mundo y la WWW son la gran colección de páginas asentadas en esta red.
             </li>
             <li><strong>¿Cuáles son las partes de un URL? </strong>
                 <ol id="Partes">
                     <li><strong>Esquema: </strong>El protocolo que se utilizará al conectarse, puede ser HTTP o HTTPS</li>
                     <li><strong>Host: </strong>El host que contiene el recurso a donde se quiere acceder. Suelen tener la estructura www.nombre.com</li>
                     <li><strong>Via de acceso: </strong>Identifica la ubicación especifica del host a donde se quiere acceder.</li>
                     <li><strong>Serie de consulta: </strong>Proporciona una serie de información que el recurso puede utilizar, como una búsqueda o datos a procesar.</li>
                 </ol>
             </li>
             <li><strong>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</strong>
                 <ol id="Metodos">
                     <li><strong>GET: </strong>Recupera datos de un recurso del servidor web.</li>
                     <li><strong>HEAD: </strong>Pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta, solo el encabezado.</li>
                     <li><strong>POST: </strong>Se envían datos al servidor para procesarlos, causando un cambio en el mismo.</li>
                     <li><strong>PUT: </strong>Reemplaza las representaciones del recurso destino con los datos enviados.</li>
                     <li><strong>PATCH: </strong>Aplica modificaciones parciales a un recurso.</li>
                     <li><strong>DELETE: </strong>Borra recursos del servidor.</li>
                 </ol>
             </li>
             <li><strong>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?<br></strong>
             Se debería usar el protocolo POST, ya que este es el que se encarga de enviar datos a un recurso en un servidor para causar cambios en el mismo.
             </li>
             <li><strong>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?<br></strong>
             Debería usarse el método GET, que es el que se utiliza para recuperar datos de un servidor
             </li>
             <li><strong>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?<br></strong>
             Esta respuesta no es un error, sino un mensaje de OK que indica que la solicitud realizada fue exitosa
             </li>
             <li><strong>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?<br></strong>
             Sí, debería ser responsabilidad del desarrollador, ya que aunque el error puede venir de parte del usuario, cuando el error es interno en la página<br>
             puede indicar que esta está mal configurada, lo que puede hacer que los usuarios la abandonen y se afecte su posicion en los motores de busqueda.
             </li>
             <li><strong>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?<br></strong>
             Sí, ya que este problema puede estar siendo ocasionado por problemas que pueden ser ya sea de front end o back end en la página y si no son arreglados, se perderá tráfico.
             </li>
             <li><strong>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.<br></strong>
             Significa que aunque el atributo se puede usar, esto no se recomienda porque puede usarse una opción mas nueva y mejor. Algunos ejemplos son:
                 <ol id="Desaprobados">
                     <li>longdesc</li>
                     <li>version</li>
                     <li>codetype</li>
                 </ol>
             </li>
             <li><strong>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?<br></strong>
             HTML5 ofrece muchas opciones convenientes y una estructura más simple que la de HTML 4. Algunas opciones que HTML5 ofrece son mejor manejo de errores <br>
             mayor apoyo para versiones móviles, soporte nativo para audio y video, entr otras.
             </li>
             <li><strong>¿Qué componentes de estructura y estilo tiene una tabla?<br></strong>
             <ol id="Componentes">
                 <li><strong>td: </strong>Table data, son los contenidos de cada celda de la tabla</li>
                 <li><strong>tr: </strong>Table row, define una fila en la tabla</li>
                 <li><strong>th: </strong>Table header, se usa cuando se quiere que una celda sea una celda de encabezado</li>
                 <li><strong>border: </strong>Es una propiedad de CSS para darle formato a los bordes</li>
                 <li><strong>style: </strong>Puede definir la altura y amplitud de las celdas</li>
                 <li><strong>padding: </strong>Controla el espacio entre el borde de la celda y el contenido</li>
                 <li><strong>border-spacing: </strong>Controla el espacio entre celdas</li>
             </ol>
             </li>
             <li><strong>¿Cuáles son los principales controles de una forma HTML5? </strong>Algunos de estos controles son los campos de texto, checkboxes, botones y<br>
             deslizadores, estos controles se incluyen para que el usuario pueda enviar datos a la página.
             </li>
             <li><strong>¿Qué tanto soporte HTML5 tiene el navegador que utilizas? </strong> El navegador que utilizo es Google Chrome, que de acuerdo a varias páginas <br>
             es uno de los navegadores con mayor soporte para las funciones de HTML5
             </li>
             <li><strong>¿Cuál es el ciclo de vida de los sistemas de información?</strong>
             <ol id="Ciclo_de_vida">
                 <li><strong>Planificación: </strong>Se realizan tareas necesarias para el inicio del proyecto</li>
                 <li><strong>Análisis: </strong>Se busca la verdadera necesidad del sistema y sus requerimientos.</li>
                 <li><strong>Diseño: </strong>Se decide la estructura del sistema que se va a construir.</li>
                 <li><strong>Implementación: </strong>Se desarrolla el sistema con las herramientas que sean necesarias.</li>
                 <li><strong>Pruebas: </strong>Se realizan pruebas para detectar y corregir errores en etapas anteriores</li>
                 <li><strong>Validacion: </strong>Se valida el proyecto para asegurar que cumpla con los requerimientos estipulados.</li>
                 <li><strong>Despliegue: </strong>Se planea el entorno donde el proyecto debe operar y se instala.</li>
                 <li><strong>Uso: </strong>Se debe adaptar el sistema a las nuevas necesidades que se presenten y se deben eliminar los errores que se encuentren a lo largo del tiempo.</li>
             </ol>
             </li>
         </ol>
         <ul id="Preguntas_CSS">
             <li><strong>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?: </strong>Creo que lo más prudente es no utilizar esta instrucción a no ser que sea extremadamente necesario, ya que puede tener efectos imprevistos sobre la página y reemplazar cosas que no debían ser reemplazadas.</li>
             <li><strong>Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?: </strong>Debe escogerse con cuidado porque podría causar conflictos a la hora de leer el contenido de la página, además de que puede perder calidad en los diferentes tamaños de pantalla e influir en la velocidad de carga de la página</li>
             <li><strong>Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt? </strong>Por las propiedades que tienen, creo que es mejor utilizar % cuando se determina el tamaño de un elemento que debe adaptarse al tamaño de diferentes dispositivos y px cuando el tamaño de algo debe ser fijo para mantener su calidad, como imágenes o algunos textos.</li>
             <li><strong>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?: </strong>El tamaño del archivo CSS se reduce eliminando caracteres y espacios innecesarios, lo que hace que se cargue más rápido.</li>
         </ul>
     
     </body>
     
     <footer>
         <hr>
         <p><strong>Referencias:<br></strong></p>
         <ol id="Referencias">
             <li>https://www.bbc.com/mundo/noticias-47538812#:~:text=Internet%20es%20una%20inmensa%20red,para%20acceder%20a%20la%20web.</li>
             <li>https://www.ibm.com/docs/es/cics-ts/6.1?topic=concepts-components-url</li>
             <li>https://developer.mozilla.org/es/docs/Web/HTTP/Methods</li>
             <li>https://www.ionos.es/digitalguide/hosting/cuestiones-tecnicas/http-request/#:~:text=M%C3%A9todos%20especiales,-Algunos%20m%C3%A9todos%20solo&text=PUT%2C%20PATCH%20y%20DELETE%20se,el%20servidor%2C%20modificarlos%20o%20eliminarlos.</li>
             <li>https://developer.mozilla.org/es/docs/Web/HTTP/Status/200</li>
             <li>https://www.ionos.es/digitalguide/paginas-web/creacion-de-paginas-web/que-significa-el-error-404-not-found/</li>
             <li>https://www.geeksforgeeks.org/what-are-the-html-tags-that-deprecated-in-html5/</li>
             <li>https://www.tutorialspoint.com/html5/html5_deprecated_tags.htm</li>
             <li>https://www.shiksha.com/online-courses/articles/difference-between-html4-and-html5/</li>
             <li>https://www.educba.com/html5-vs-html4/</li>
             <li>https://www.w3schools.com/html/html_tables.asp</li>
             <li>https://www.w3schools.com/html/html_table_borders.asp</li>
             <li>https://www.w3schools.com/html/html_table_sizes.asp</li>
             <li>https://www.w3schools.com/html/html_table_headers.asp</li>
             <li>https://www.w3schools.com/html/html_table_padding_spacing.asp</li>
             <li>https://developer.mozilla.org/es/docs/Learn/Forms/Basic_native_form_controls</li> 
             <li>https://www.almabetter.com/bytes/tutorials/html/form-controls-in-html</li>
             <li>https://caniuse.com/</li>
             <li>https://www.lambdatest.com/web-technologies/forms</li>
             <li>https://www.gestiopolis.com/ciclo-de-vida-de-un-sistema-de-informacion/</li>
             <li>https://www.techtarget.com/searchsoftwarequality/definition/systems-development-life-cycle</li>
             <li>https://www.avenuglobal.com/noticias/cuales-son-las-etapas-del-ciclo-de-vida-del-desarrollo-de-software-etapas-del-sdlc</li>
             <li>https://www.ibm.com/docs/es/cics-ts/6.1?topic=concepts-components-url</li>
             <li>https://medium.com/@greeneveno/500-internal-server-error-whose-fault-frontend-or-backend-d6750f1ae8c0</li>
         </ol>
     </footer>
     
     </html>
`);
     response.end();
});
server.listen(3000);