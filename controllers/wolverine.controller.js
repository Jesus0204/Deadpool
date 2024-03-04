exports.get_wolverine = (request, response, next) => {
    response.render('mensaje_wolverine');
};

exports.post_wolverine = (request, response, next) => {
  console.log(request.body);
  messages.push(request.body);
  response.redirect('/');
};

exports.get_root = (request, response, next) => {
  console.log('Ruta /');
  response.render('homepage', {
    messages: messages,
  });
};