// Llamas el módulo de express otra vez
const express = require('express');

// Ahora en vez de usar app, se usa el router de express
const router = express.Router();

const userController = require('../controllers/users.controller')

router.get('/login', userController.get_login);
router.post('/login', userController.post_login);
router.get('/logout', userController.get_logout);

// Con esta linea se permite que se exporte en el principal
module.exports = router;

