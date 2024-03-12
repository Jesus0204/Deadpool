exports.get_wolverine = (request, response, next) => {
  response.render('mensaje_wolverine', {
    username: request.session.username || '',
    csrfToken: request.csrfToken()
  });
};

const Wolverine_Message = require('../models/wolverine_message.model');

exports.post_wolverine = (request, response, next) => {
  console.log(request.body);
  // Creas una nueva instancia de la clase con su titulo y mensaje
  const message =
    new Wolverine_Message(request.body.titulo, request.body.mensaje, request.session.username);
  // Llamas al método de la clase que guarda eso en el arreglo
  message.save()
  .then(([rows, fieldData]) => {
    // Guardas una cookie mandandola en el header, guardando el último mensaje del usuario
    // La cookie es signed para que sea segura y no la puedan modificar
    response.cookie("ultimo_mensaje", request.body.mensaje, {
      signed: true
    });
    response.redirect('/mensajes');
  })
  .catch((error) => {console.log(error)});
};

exports.get_mensajes = (request, response, next) => {
  /* Usando cookie parser sacas el cookie con request.cookies y como la cookie se llama ultimo_mensaje  
    Accedes rápido a esa cookie sin tener que hacer splits */
  let ultimo_mensaje = request.signedCookies.ultimo_mensaje;

  // En fetch all esta la consulta de la base de datos
  // Si la promesa se ejecuto, pasas rows (donde se guarda la info) a mensajes
  // De esa forma el ejs sabe leer los datos
  Wolverine_Message.fetch(request.params.mensaje_id, request.session.username)
  .then(([rows, fieldData]) => {
      response.render('mensajes', {
        messages: rows,
        // Para pasar la variable a ejs, lo pasas de esta forma
        ultimo_mensaje: ultimo_mensaje,
        username: request.session.username || '',
      });
    })
    .catch((error) => {
      console.log(error);
    });

};