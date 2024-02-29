// Llamas el módulo de express otra vez
const express = require('express');

// Ahora en vez de usar app, se usa el router de express
const router = express.Router();

router.use('/deadpool!', (request, response, next) => {
    response.render('deadpool'); 
});
  
router.use('/instagram', (request, response, next) => {
    response.render('instagram');
});

router.use('/trailer', (request, response, next) => {
    response.render('trailer');
});

// Con esta linea se permite que se exporte en el principal
module.exports = router;