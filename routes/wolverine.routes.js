// Llamas el módulo de express otra vez
const express = require('express');

// Ahora en vez de usar app, se usa el router de express
const router = express.Router();

// Incluyes el modulo de tu controller en routes
const wolverineController = require('../controllers/wolverine.controller');

const messages = [
  {
    titulo: "¡¿Help?!", 
    mensaje: "Don't just stand there you ape! Get over here and give me a hand!"
  }
];
  
// Le dices para esa ruta, que use el controlador con el método getwolverine
router.get('/wolverine', wolverineController.get_wolverine);
  
router.post('/wolverine', (request, response, next) => {
  console.log(request.body);
  messages.push(request.body);
  response.redirect('/');
});
  
router.get('/', (request, response, next) => {
  console.log('Ruta /');
  response.render('homepage', {
    messages: messages,
  });
});

// Con esta linea se permite que se exporte en el principal
module.exports = router;