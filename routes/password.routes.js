// Llamas el módulo de express otra vez
const express = require('express');

// Ahora en vez de usar app, se usa el router de express
const router = express.Router();

const passwordController = require('../controllers/password.controller')

// Incluyes el archivo para verificar si esta autenticado
const isAuth = require('../util/is-auth');
const canCreate_Post = require('../util/can-create_post');

router.get('/', isAuth, canCreate_Post, passwordController.get_password_root);

// Con esta linea se permite que se exporte en el principal
module.exports = router;