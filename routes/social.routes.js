// Llamas el módulo de express otra vez
const express = require('express');

// Ahora en vez de usar app, se usa el router de express
const router = express.Router();

// Incluyes el modulo de tu controller en routes
const socialController = require('../controllers/social.controller');

// Incluyes el archivo para verificar si esta autenticado
const isAuth = require('../util/is-auth');
const canCreate_Post = require('../util/can-create_post');

router.get('/deadpool!', socialController.get_deadpool);
router.get('/instagram/crear_post', isAuth, canCreate_Post, socialController.get_crear_post);
router.post('/instagram/crear_post', isAuth, canCreate_Post, socialController.post_crear_post);
router.get('/instagram/buscar/:valor_busqueda', isAuth, socialController.get_buscar);
router.get('/instagram/buscar/', isAuth, socialController.get_buscar);
router.post('/instagram/delete', isAuth, canCreate_Post, socialController.post_delete);
router.get('/instagram/:insta_id', isAuth, socialController.get_instagram);
router.get('/instagram/', isAuth, socialController.get_instagram);
router.get('/trailer', socialController.get_trailer);
router.get('/minion', isAuth, socialController.get_groot);
router.post('/minion/translate', socialController.post_translation);

// Con esta linea se permite que se exporte en el principal
module.exports = router;