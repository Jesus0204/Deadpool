// Llamas el módulo de express otra vez
const express = require('express');

// Ahora en vez de usar app, se usa el router de express
const router = express.Router();

const userController = require('../controllers/users.controller')

router.get('/login', userController.get_login);

// Con esta linea se permite que se exporte en el principal
module.exports = router;

