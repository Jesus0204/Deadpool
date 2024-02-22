console.log("hola mundo desde node");

// Accedes a una libreria para acceder a archivos de computadora y lo guardas en una variable

const filesystem = require('fs');
// Escribe el string segundo parámetro en el archivo indicado en el primer paramétro
filesystem.writeFileSync("hola.txt", "Hola desde node");

setTimeout(() => {
    console.log("jojo te hackié");
}, 7000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}