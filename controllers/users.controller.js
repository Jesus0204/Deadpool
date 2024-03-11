const Usuario = require('../models/user.model');

exports.get_login = (request, response, next) => {
    response.render('login', {
    username: request.session.username || '',
    registrar: false,
    });
};

// Con express session se guarda la sesion en la variable username
exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username, request.body.password)
    .then(([rows, fieldData]) => {
        if (rows.length == 1){
            request.session.username = request.body.username;
            response.redirect('/mensajes');
        } else {
            response.redirect('/users/login');
        }
    })
    .catch((error) => {
        console.log(error)
    })
}

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_signup = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registrar: true,
    });
};

exports.post_signup = (request, response, next) => {
    const new_user = new Usuario(request.body.username, request.body.password);
    new_user.save()
    .then(([rows, fieldData]) => {
        response.redirect('/users/login');
    })
    .catch((error) => {
        console.log(error)
    })
}