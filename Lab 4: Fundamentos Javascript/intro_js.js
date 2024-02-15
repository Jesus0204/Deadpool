// Con esto se imprime 
console.log("hola");

// Manda informacion
console.info("Esto es información");

// Manda una advertencia
console.warn("Esto es una advertencia");

// Manda un error
console.error("Esto es un error");

// Es para hacer pruebas. Si es verdadero no hace nada, y si si manda un error
console.assert(1==1);
console.assert(1==2);

// variables, constantes

// Forma antigua de declarar variables
var personaje = "Deadpool";

// Constantes
const precio = 50;

// Forma moderna y segura de declarar variable
let cantidad = 1;

// alert, prompt, confirm
alert("Hola");

// Le pregunta algo al usuario
const nombre = prompt("¿Como te llamas?");
console.log("Hola " + nombre);

// Para cosas de true o false y le pregunta al usuario
const hambre = confirm("¿Tienes hambre?");
if (hambre){
    console.log("Es hora de desayunar");
}
else {
    console.log("Sigamos trabajando");
}

// El tripe igual === te compara el valor y el tipo de dato 