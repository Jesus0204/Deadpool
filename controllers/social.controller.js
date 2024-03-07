exports.get_deadpool = (request, response, next) => {
    response.render('deadpool', {
        username: request.session.username || '',
    });
};

exports.get_crear_post = (request, response, next) => {
    response.render('crear_post', {
        username: request.session.username || '',
    });
};

const Instagram_Post = require('../models/create_instagram_post.model');

exports.get_instagram = (request, response, next) => {

    Instagram_Post.fetchAll().
        then(([rows, fieldData]) => {
            response.render('instagram', {
                username: request.session.username || '',
                instagram_post: rows,
            });
            })
            .catch((error) => {
                console.log(error);
            });
};

exports.post_crear_post = (request, response, next) => {
    // Pedir los datos que se pidieron
    console.log(request.body);
    // Creas una nueva instancia de la clase con su titulo y mensaje
    const instagram_post =
        new Instagram_Post(request.body.titulo, request.body.caption, request.body.imagen);
        
    instagram_post.save()
    .then(([rows, fieldData]) => {
        response.redirect('/social/instagram');
        })
        .catch((error) => {
            console.log(error)
        });;
};

exports.get_trailer = (request, response, next) => {
    response.render('trailer', {
        username: request.session.username || '',
    });
};