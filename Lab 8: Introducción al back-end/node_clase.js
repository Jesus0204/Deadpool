console.log("hola mundo desde node");

// Accedes a una libreria para acceder a archivos de computadora y lo guardas en una variable

const filesystem = require('fs');
// Escribe el string segundo parámetro en el archivo indicado en el primer paramétro
filesystem.writeFileSync("hola.txt", "Hola desde node");

setTimeout(() => {
    console.log("jojo te hackié");
}, 7000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

// Código asincrono, el arreglo lo imprime en orden
for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
};

/* Mete lo anterior a la pila y esto se escribe al principio, por que lo demás 
  esta como "pending". A esto se refiere asincrono. Como no tiene un tiempo en el que 
  se tiene que ejecutar, se pone antes que todo lo demás. */
console.log("Esto se escribe antes de los números");

/* PRIMER SERVIDOR WEB */

// Módulo de node con todas las funciones de un servidor web
const http = require("http");

// Creas el servidor con create server
const server = http.createServer( (request, response) => {
    // Imprime el url que pidio el usuario con el servidor (cuando busca localhost:3000)
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    response.write("Hola mundo desde node");
    // Envía la respuesta del servidor
    response.end();
});

// Para que el servidor este activo, hay que decirle que escuche peticiones en un puerto (3000)
server.listen(3000);