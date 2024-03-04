// Llamas el módulo de express otra vez
const express = require('express');

// Ahora en vez de usar app, se usa el router de express
const router = express.Router();

// Incluyes el modulo de tu controller en routes
const socialController = require('../controllers/social.controller');

router.get('/deadpool!', socialController.get_deadpool);
router.get('/crear_post', socialController.get_crear_post);
router.post('/crear_post', socialController.post_crear_post);
router.get('/instagram', socialController.get_instagram);
router.get('/trailer', socialController.get_trailer);

// Con esta linea se permite que se exporte en el principal
module.exports = router;