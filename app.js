// Para usar express en vez de http
const express = require('express');
// Inicia la app usuando a express
const app = express();

// Manipular facil los datos de las peticiones
const bodyParser = require('body-parser');

// Configura bodyparser
app.use(bodyParser.urlencoded({extended: false}));

const header = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>¡¡Lab 11: Express!!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <!-- Aquí se usan los íconos de font awesome  -->
        <script src="https://kit.fontawesome.com/98026b1a47.js" crossorigin="anonymous"></script>
      </head>
      <body>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="http://localhost:3000/">
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
                <a class="navbar-item" href="/">
                   Home
                </a>

                <a id="boton_casa" class="navbar-item">
                  Esta es mi casa
                </a>
          
                <a class="navbar-item" href="/wolverine">
                  Enviar mensaje a Wolverine
                </a>

                <a class="navbar-item" href="/deadpool!">
                  Deadpool!
                </a>

                <a class="navbar-item" href="/instagram">
                  Instagram
                </a>

              <a class="navbar-item" href="/trailer">
                Trailer Deadpool 3
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
          `;

const footer = `
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
        <script>
            const boton = document.getElementById("boton_disparar");

            const disparar_enemigo = () => {
                const imagen = document.getElementById("imagen_disparar");
                imagen.src = "https://www.japantimes.co.jp/wp-content/uploads/2016/06/p9-hadfield-deadpool-a-20160602.jpg";
            
                boton.innerHTML = "Matar Enemigo";
                boton.className = "button is-danger is-light";
                boton.onclick = matar_enemigo;
            
            }
            
            boton.onclick = disparar_enemigo;
            
            const matar_enemigo = () => {
                const imagen = document.getElementById("imagen_disparar");
                imagen.src = "https://variety.com/wp-content/uploads/2020/08/deadpool.jpg?w=1000&h=563&crop=1&resize=1000%2C563";
            
                boton.innerHTML = "Rematar Enemigo";
                boton.className = "button is-danger";
            
                boton.onclick = rematar_enemigo;
            
            }
            
            const rematar_enemigo = () => {
                const imagen = document.getElementById("imagen_disparar");
                imagen.src = "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/02/1484222978-deadpool.jpg?resize=1200:*";
            
                boton.innerHTML = "Disparar Enemigo";
                boton.className = "button is-primary";
            
                boton.onclick = disparar_enemigo;
            }
            
            const casa = document.getElementById("boton_casa")
            
            const Esta_es_mi_casa = () => {
                const imagen = document.getElementById("imagen_disparar");
                imagen.src = "https://www.branding.news/wp-content/uploads/2018/05/deadpool-cover.jpg";
                casa.innerHTML = "¿Qué haces en mi casa?";
            }
            
            casa.onclick = Esta_es_mi_casa;
        </script>
      </body>
    </html>
    `;

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// Guardas las rutas del modulo en el archivo
const rutasWolverine = require('./routes/wolverine.routes.js');

// Usas esas rutas en la variable
app.use('/', rutasWolverine);

app.use((request, response, next) => {
  response.status(404);
  const final = header + `
  <section class="section">
  <div class="container">
    <h1 id="title" class="title">Oops, no existe el enemigo que estas buscando</h1>
      <div class="block">
        <figure>
          <img id="imagen_disparar" src="https://shirtoid.com/wp-content/uploads/2017/12/Oops.jpg">
         </figure>
      </div>
    </div>
  </section>` + footer;
  response.send(final);
});

// Para que el servidor este activo
app.listen(3000);