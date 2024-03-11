// Llamas el módulo de express otra vez
const express = require('express');

// Ahora en vez de usar app, se usa el router de express
const router = express.Router();

// Incluyes el modulo de tu controller en routes
const wolverineController = require('../controllers/wolverine.controller');
  
// Le dices para esa ruta, que use el controlador con la acción get_wolverine
// Le pasas el apuntador a la acción que tiene que ejecutar
router.get('/wolverine', wolverineController.get_wolverine);

// Haces lo mismo para las otras rutas, llamando al controlador con sus acciones
router.post('/wolverine', wolverineController.post_wolverine);
router.get('/', wolverineController.get_mensajes);

// Con esta linea se permite que se exporte en el principal
module.exports = router;