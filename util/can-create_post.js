module.exports = (request, response, next) => {
    let can_create_post = false;
    for (let permiso of request.session.permisos) {
        if (permiso.funcion == 'crear_post') {
            can_create_post = true;
        }
    }
    if (can_create_post) {
        next();

    } else {
        return response.redirect('/users/logout');
    }
}