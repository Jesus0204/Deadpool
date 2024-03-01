// Para usar express en vez de http
const express = require('express');
// Inicia la app usuando a express
const app = express();

// Configuras a EJS como motor de templates con express
app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');

// La aplicacion va a tener acceso a todo lo que esta en public
app.use(express.static(path.join(__dirname, 'public')));

// Manipular facil los datos de las peticiones
const bodyParser = require('body-parser');

// Configura bodyparser
app.use(bodyParser.urlencoded({
  extended: false
}));

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasSocial = require('./routes/social.routes.js');
app.use('/social', rutasSocial);

app.get('/password', (request, response, next) => {
  response.sendFile(
    path.join(__dirname, 'public', 'password.html')
  );
});

// Guardas las rutas del modulo en el archivo
const rutasWolverine = require('./routes/wolverine.routes.js');

// Usas esas rutas en la variable
app.use('/', rutasWolverine);


// Ahora se envia la respuesta con un archivo html que se encuentra en la carpeta views
app.use((request, response, next) => {
  response.status(404);
  response.sendFile(
    path.join(__dirname, 'views', '404.html')
  );
});

// Para que el servidor este activo
app.listen(3000);