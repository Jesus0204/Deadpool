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
  response.setHeader('Set-Cookie', 'ultimo_mensaje=' + request.body.mensaje);
  response.redirect('/');
};

exports.get_root = (request, response, next) => {
  console.log('Ruta /');
  response.render('homepage', {
    messages: Wolverine_Message.fetchAll(),
  });
};