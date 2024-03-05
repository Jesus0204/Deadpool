exports.get_login = (request, response, next) => {
    response.render('login');
};

// Con express session se guarda la sesion en la variable username
exports.post_login = (request, response, next) => {
    request.session.username = request.body.username;
    response.redirect('/');
}