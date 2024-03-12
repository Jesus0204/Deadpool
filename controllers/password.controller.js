exports.get_password_root = (request, response, next) => {
    response.render('password', {
        username: request.session.username || '',
        permisos: request.session.permisos || [],
    });
};
