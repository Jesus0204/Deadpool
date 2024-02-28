// Para usar express en vez de http
const express = require('express');
// Inicia la app usuando a express
const app = express();

// Manipular facil los datos de las peticiones
const bodyParser = require('body-parser');

// Configura bodyparser
app.use(bodyParser.urlencoded({extended: false}));

const messages = [{titulo: "¡¿Help?!", mensaje: "Don't just stand there you ape! Get over here and give me a hand!", date: "Dom Feb 11, 2024"}];

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

app.use('/deadpool!', (request, response, next) => {
  const final = header + `
  <section class="section">
    <div class="container">
      <h1 id="title" class="title">Deadpool!</h1>
      <div class="block">
        <figure>
            <img id="imagen_disparar" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/old_images/MOVIE/3257/1770003257/1770003257-h">
        </figure>
      </div>
      <div class="columns">` + footer;
  response.send(final); 
});

app.use('/instagram', (request, response, next) => {
  let final = header;

  final += `
  <section class="section">
  <div class="container">
      <h1 id="title" class="title">¿¡Un instagram de deadpool?!</h1>
      <div class="block">
        <figure>
            <img id="imagen_disparar" src="">
        </figure>
      </div>
    <div class="columns">
    <div class="column">
        <div class="card">
            <div class="card-image">
              <figure class="image is-3by2">
                <img src="https://pbs.twimg.com/media/Fr3GjD6WIAIZEU3?format=jpg&name=medium" alt="Deadpool selfie beach">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://pbs.twimg.com/media/Fr3GjD6WIAIZEU3?format=jpg&name=medium" alt="Deadpool selfie beach">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">¡¿Vacaciones?!</p>
                  <p class="subtitle is-6">@deadp00l!</p>
                </div>
              </div>
          
              <div class="content">
                Aquí en Vallarta buscando a mi buen amigo Wolverine
                <br>
                <time datetime="2023-12-1">11:09 PM - 12 Dic 2023</time>
              </div>
            </div>
          </div>
    </div>

    <div class="column">
        <div class="card">
            <div class="card-image">
              <figure class="image is-3by2">
                <img src="https://cnnespanol.cnn.com/wp-content/uploads/2023/07/deadpool-3-wolverine.jpg?quality=100&strip=info&w=940&h=530&crop=1" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://cnnespanol.cnn.com/wp-content/uploads/2023/07/deadpool-3-wolverine.jpg?quality=100&strip=info&w=940&h=530&crop=1" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Lo encontre!</p>
                  <p class="subtitle is-6">@deadp00l!</p>
                </div>
              </div>
          
              <div class="content">
                Estaba caminando de regreso hacia el universo de Fox.
                <br>
                <time datetime="2024-1-1">1:45 PM - 1 Jan 2024</time>
              </div>
            </div>
          </div>
    </div>

    <div class="column">
        <div class="card">
            <div class="card-image">
              <figure class="image is-square">
                <img src="https://www.cnet.com/a/img/resize/c6f874db32e0ab4c7fa8e34bee3d3e3b57215fd5/hub/2018/05/14/59b90dde-f0e9-4250-b13b-a520ae2fba5d/deadpool-2-og.jpg?auto=webp&fit=crop&height=1200&width=1200" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://www.cnet.com/a/img/resize/c6f874db32e0ab4c7fa8e34bee3d3e3b57215fd5/hub/2018/05/14/59b90dde-f0e9-4250-b13b-a520ae2fba5d/deadpool-2-og.jpg?auto=webp&fit=crop&height=1200&width=1200" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Escuchando unos buenos beats</p>
                  <p class="subtitle is-6">@deadp00l!</p>
                </div>
              </div>
          
              <div class="content">
                ¿A quién más le gusta Solence?
                <br>
                <time datetime="2024-2-27">11:09 PM - 27 Feb 2024</time>
              </div>
            </div>
          </div>
    </div>
    </div>

  </div>`

  final += footer;
  response.send(final);
})

app.use('/trailer', (request, response, next) => {
  let final = header + `
  <section class="section">
    <div class="container">
      <h1 id="title" class="title">Trailer de Deadpool 3</h1>
      <div class="block">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/uJMCNJP2ipI?si=mTX9b0t5k6acf4cW?autoplay=1&controls=0" title="YouTube video player">
      </iframe>
      </div>
      <div class="block">
        <figure>
            <img id="imagen_disparar" src="">
        </figure>
      </div>
      <div class="columns">` + footer;
  response.send(final);
})

app.get('/wolverine', (request, response, next) => {
  const final = header + `
  <section class="section">
    <div class="container">
      <h1 id="title" class="title"> Envía un mensaje a nuestro bro Wolverine </h1>
      <form action="/wolverine" method="POST">
        <label class="label" for="titulo">Titulo de mensaje:</label>
        <input name="titulo" class="input" type="text" id="titulo"><br>
        <label class="label" for="mensaje">Mensaje para el broski:</label>
        <input name="mensaje" class="input" type="text" id="mensaje"><br><br>
        <input class="button is-success" type="submit" value="Enviar">
      </form>
    </div>
    <br>
    <div class="block">
      <figure>
        <img id="imagen_disparar" src="">
      </figure>
    </div>
  </section>
` + footer;
  response.send(final);
})

app.post('/wolverine', (request, response, next) => {
  console.log(request.body);
  messages.push(request.body);
  response.redirect('/');
})

app.get('/', (request, response, next) => {
  console.log('Ruta /');
  let final = header;
  final += `
  <section class="section">
      <div class="container">
        <h1 id="title" class="title">Hello there</h1>
        <div class="block">
          <figure>
              <img id="imagen_disparar" src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/02/1484222978-deadpool.jpg?resize=1200:*">
          </figure>
        </div>
        <div class="columns">`;

  let tarjetas_mensajes = '';
    for(let mensaje of messages) {
      tarjetas_mensajes += `
        <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">${mensaje.titulo}</p>
                    <p class="subtitle is-6">@Deadp00l!</p>
                  </div>
                </div>
            
                <div class="content">
                  ${mensaje.mensaje}
                  <br>
                </div>
              </div>
            </div>
      </div>
    `;}

  final += tarjetas_mensajes + `</div>` + footer;
  response.send(final);
  });

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