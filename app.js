// Para usar express en vez de http
const express = require('express');
// Inicia la app usuando a express
const app = express();

// Configuras a EJS como motor de templates con express
app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');

// Para usar las sesiones
const session = require('express-session');

app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

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

const rutasUsuarios = require('./routes/users.routes.js');
app.use('/users', rutasUsuarios);

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
  response.render('404');
});

// Para que el servidor este activo
app.listen(3000);