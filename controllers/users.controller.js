const Usuario = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
    username: request.session.username || '',
    registrar: false,
    error: error,
    csrfToken: request.csrfToken(),
    permisos: request.session.permisos || [],
    });
};

// Con express session se guarda la sesion en la variable username
exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
    .then(([users, fieldData]) => {
        if (users.length == 1) {
            // users[0] contiene el objeto de la respuesta de la consulta
            const user = users[0];
            // Ya que verificamos que el usuario existe en la base de datos
            bcrypt.compare(request.body.password, user.password)
                .then(doMatch => {
                    // Si la promesa es verdadero, entonces inicias sesion en la pagina
                    if (doMatch) {
                        Usuario.getPermisos(user.username)
                        .then(([permisos, fieldData]) => {
                            request.session.isLoggedIn = true;
                            request.session.permisos = permisos;
                            console.log(request.session.permisos);
                            request.session.username = user.username;
                            return request.session.save(err => {
                                response.redirect('/mensajes');
                        })})
                        .catch((error) => {console.log(error)});
                    // Por si los passwords no hacen match
                    } else {
                        request.session.error = 'El usuario y/o contraseña con incorrectos.';
                        return response.redirect('/users/login');
                    }
                // Por si hay un error en la libreria o algo
                }).catch(err => {
                    response.redirect('/users/login');
                });
            // Por si el usuario no existe en la base de datos
        } else {
            request.session.error = 'El usuario y/o contraseña con incorrectos.';
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
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        username: request.session.username || '',
        registrar: true,
        error: error,
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });
};

exports.post_signup = (request, response, next) => {
    const new_user = new Usuario(request.body.username, request.body.password);
    new_user.save()
    .then(([rows, fieldData]) => {
        response.redirect('/users/login');
    })
    .catch((error) => {
        request.session.error = 'Nombre de usuario invalido.';
        console.log(error)
        response.redirect('/users/signup');
    })
}