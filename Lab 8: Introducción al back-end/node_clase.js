console.log("hola mundo desde node");

// Accedes a una libreria para acceder a archivos de computadora y lo guardas en una variable

const filesystem = require('fs');
// Escribe el string segundo parámetro en el archivo indicado en el primer paramétro
filesystem.writeFileSync("hola.txt", "Hola desde node");