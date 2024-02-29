console.log("hola mundo desde node");

// Accedes a una libreria para acceder a archivos de computadora y lo guardas en una variable

const filesystem = require('fs');
// Escribe el string segundo parámetro en el archivo indicado en el primer paramétro
filesystem.writeFileSync("hola.txt", "Hola desde node");

setTimeout(() => {
    console.log("jojo te hackié");
}, 7000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

// Código asincrono, el arreglo lo imprime en orden
for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
};

/* Mete lo anterior a la pila y esto se escribe al principio, por que lo demás 
  esta como "pending". A esto se refiere asincrono. Como no tiene un tiempo en el que 
  se tiene que ejecutar, se pone antes que todo lo demás. */
console.log("Esto se escribe antes de los números");

/* PRIMER SERVIDOR WEB */

// Módulo de node con todas las funciones de un servidor web
const http = require("http");

// Creas el servidor con create server
const server = http.createServer( (request, response) => {
    // Imprime el url que pidio el usuario con el servidor (cuando busca localhost:3000)
    console.log(request.url);
    // Le dice al servidor que responda con contenido de html y de texto
    response.setHeader("Content-Type", "text/html");
    response.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>¡¡Laboratorio 8: Respuesta de un servidor!!!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <!-- Aquí se usan los íconos de font awesome  -->
        <script src="https://kit.fontawesome.com/98026b1a47.js" crossorigin="anonymous"></script>
      </head>
      <body>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Deadpool_logo.jpg" width="112" height="28">
              </a>
          
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a id="boton_casa" class="navbar-item">
                  Esta es mi casa
                </a>
          
                <a class="navbar-item">
                  Y este es un nav item que no hace nada
                </a>
              </div>
          
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a id="boton_disparar" class="button is-primary">
                      <strong>Disparar Enemigo</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
      <section class="section">
        <div class="container">
          <h1 id="title" class="title">Hello there</h1>
          <div class="block">
            <figure>
                <img id="imagen_disparar" src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/02/1484222978-deadpool.jpg?resize=1200:*">
            </figure>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
      </body>
      </html>
      `);
    // Envía la respuesta del servidor
    response.end();
});

// Para que el servidor este activo, hay que decirle que escuche peticiones en un puerto (3000)
server.listen(3000);