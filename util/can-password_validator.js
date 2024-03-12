module.exports = (request, response, next) => {
    let can_password_validator = false;
    for (let permiso of request.session.permisos) {
        if (permiso.funcion == 'password_validator') {
            can_password_validator = true;
        }
    }
    if (can_password_validator) {
        next();

    } else {
        return response.redirect('/users/logout');
    }
}