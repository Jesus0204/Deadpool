// Para usar express en vez de http
const express = require('express');
// Inicia la app usuando a express
const app = express();

// Configuras a EJS como motor de templates con express
app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');

// Para que se puede usar cookie parser de forma mas facil
const cookieParser = require('cookie-parser')
app.use(cookieParser('Un secreto'))

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

// Para procesar archivos
const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
  destination: (request, file, callback) => {
    //'public/uploads': Es el directorio del servidor donde se subirán los archivos 
    callback(null, 'public/uploads');
  },
  filename: (request, file, callback) => {
    //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
    //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
    callback(null, new Date().toISOString() + '-' + file.originalname);
  },
});

/* En el registro, pasamos la constante de configuración y 
  usamos single porque es un sólo archivo el que vamos a subir, 
  pero hay diferentes opciones si se quieren subir varios archivos. 
  'archivo' es el nombre del input tipo file de la forma */
app.use(multer({
  storage: fileStorage
}).single('imagen'));

// Para proteger del Cross-Site Request Forgery
const csrf = require('csurf');
const csrfProtection = csrf();

//...Y después del código para inicializar la sesión... 
app.use(csrfProtection);


//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasSocial = require('./routes/social.routes.js');
app.use('/social', rutasSocial);

const rutasUsuarios = require('./routes/users.routes.js');
app.use('/users', rutasUsuarios);

const rutaPassword = require('./routes/password.routes.js');
app.use('/password', rutaPassword);

// Guardas las rutas del modulo en el archivo
const rutasWolverine = require('./routes/wolverine.routes.js');
// Usas esas rutas en la variable
app.use('/mensajes', rutasWolverine);

// Ahora se envia la respuesta con un archivo html que se encuentra en la carpeta views
app.use((request, response, next) => {
  response.status(404);
  response.render('404', {
    username: request.session.username || '',
    permisos: request.session.permisos || [],
  });
});

// Para que el servidor este activo
app.listen(3000);