exports.get_deadpool = (request, response, next) => {
    response.render('deadpool');
};

exports.get_instagram = (request, response, next) => {
    response.render('instagram');
};

exports.get_crear_post = (request, response, next) => {
    response.render('crear_post');
};

exports.post_crear_post = (request, response, next) => {
    response.redirect('/social/instagram');
};

exports.get_trailer = (request, response, next) => {
    response.render('trailer');
};