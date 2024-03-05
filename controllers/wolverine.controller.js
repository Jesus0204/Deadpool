exports.get_wolverine = (request, response, next) => {
  response.render('mensaje_wolverine', {
    username: request.session.username || '',
  });
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
  /* Usando cookie parser sacas el cookie con request.cookies y como la cookie se llama ultimo_mensaje  
    Accedes rápido a esa cookie sin tener que hacer splits */
  let ultimo_mensaje = request.cookies.ultimo_mensaje;

  // Lo imprimes en la consola
  console.log(ultimo_mensaje);
  //console.log(ultimo_mensaje)
  response.render('homepage', {
    messages: Wolverine_Message.fetchAll(),
    // Para pasar la variavle a ejs, lo pasas de esta forma
    ultimo_mensaje: ultimo_mensaje,
    username: request.session.username || '',
  });
};