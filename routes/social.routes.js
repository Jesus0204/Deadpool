// Llamas el módulo de express otra vez
const express = require('express');

// Ahora en vez de usar app, se usa el router de express
const router = express.Router();

// Incluyes el modulo de tu controller en routes
const socialController = require('../controllers/social.controller');

// Incluyes el archivo para verificar si esta autenticado
const isAuth = require('../util/is-auth');

router.get('/deadpool!', socialController.get_deadpool);
router.get('/instagram/crear_post', isAuth, socialController.get_crear_post);
router.post('/instagram/crear_post', isAuth, socialController.post_crear_post);
router.get('/instagram/:insta_id', isAuth, socialController.get_instagram);
router.get('/instagram/', isAuth, socialController.get_instagram);
router.get('/trailer', socialController.get_trailer);

// Con esta linea se permite que se exporte en el principal
module.exports = router;