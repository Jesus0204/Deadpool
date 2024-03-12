module.exports = (request, response, next) => {
    let can_enviar_mensaje = false;
    for (let permiso of request.session.permisos) {
        if (permiso.funcion == 'enviar_mensaje') {
            can_enviar_mensaje = true;
        }
    }
    if (can_enviar_mensaje) {
        next();

    } else {
        return response.redirect('/users/logout');
    }
}