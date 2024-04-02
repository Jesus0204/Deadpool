// Llamas el módulo de express otra vez
const express = require('express');

// Ahora en vez de usar app, se usa el router de express
const router = express.Router();

// Incluyes el modulo de tu controller en routes
const wolverineController = require('../controllers/wolverine.controller');

// Incluyes el archivo para verificar si esta autenticado
const isAuth = require('../util/is-auth');
const canEnviar_Mensaje = require('../util/can-enviar_mensaje');
  
// Le dices para esa ruta, que use el controlador con la acción get_wolverine
// Le pasas el apuntador a la acción que tiene que ejecutar
router.get('/wolverine', isAuth, canEnviar_Mensaje, wolverineController.get_wolverine);

// Haces lo mismo para las otras rutas, llamando al controlador con sus acciones
router.post('/wolverine', isAuth, canEnviar_Mensaje, wolverineController.post_wolverine);

// Haces la ruta oculta para buscar
router.get('/buscar/:valor_busqueda', isAuth, wolverineController.get_buscar);
router.get('/buscar/', isAuth, wolverineController.get_buscar);

router.get('/:mensaje_id', isAuth, wolverineController.get_mensajes);
router.get('/', isAuth, wolverineController.get_mensajes);

// Con esta linea se permite que se exporte en el principal
module.exports = router;