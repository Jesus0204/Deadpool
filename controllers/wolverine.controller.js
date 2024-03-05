exports.get_wolverine = (request, response, next) => {
  response.render('mensaje_wolverine');
};

const Wolverine_Message = require('../models/wolverine_message.model');

exports.post_wolverine = (request, response, next) => {
  console.log(request.body);
  // Creas una nueva instancia de la clase con su titulo y mensaje
  const message =
    new Wolverine_Message(request.body.titulo, request.body.mensaje);
  // Llamas al método de la clase que guarda eso en el arreglo
  message.save();
  // Guardas una cookie mandandola en el header, guardando el último mensaje del usuario
  response.setHeader('Set-Cookie', 'ultimo_mensaje=' + request.body.mensaje + '; HttpOnly');
  response.redirect('/');
};

exports.get_root = (request, response, next) => {
  console.log('Ruta /');
  // Con request.get('Cookie') obtienes todas las cookies 
  // El split es para solo obtener el valor sin lo otro
  let ultimo_mensaje = request.get('Cookie');

  // Aseguras que no truene la aplicacion si existe la cookie hace el split
  if (ultimo_mensaje) {
    ultimo_mensaje = ultimo_mensaje.split('=')[1];
  // Si no es un string vacio
  } else {
    ultimo_mensaje = '';
  }
  // Lo imprimes en la consola
  console.log(ultimo_mensaje);
  response.render('homepage', {
    messages: Wolverine_Message.fetchAll(),
    // Para pasar la variavle a ejs, lo pasas de esta forma
    ultimo_mensaje: ultimo_mensaje,
  });
};