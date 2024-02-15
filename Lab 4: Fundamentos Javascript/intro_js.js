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

// funciones tradicionales
function disparar() {
    console.log("Disparar al villano");
}

disparar();

// funciones modernas

// Esta es una constante que guarda la funcion
const disparo = () => {
    console.log("Disparando a un henchmen anónimo");
};

// La variable se puede usar como funcion
disparo();

const desayuno = (comida) => {
    console.log("El desayuno de hoy es " + comida);
};

desayuno("huevitos");

// arreglos

// Se pueden modificar los contenidos del arreglo, pero la direccion de memoria es la constante
const arreglo = ["Elemento"];
const arreglo_2 = new Array();

// Son arreglos dinámicos
arreglo.push("Otro elemento");
arreglo.push(5);

console.log(arreglo);

// Se agrega solo y creo elemento vacíos para llenar lo demás
arreglo[10] = "Uno más";

// arreglos asociativos

// Es un diccionario. Lo pone al final
arreglo["dos"] = 8;

console.log(arreglo);

// recorrido tradicional del arreglo
for (let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

// recorridos alternativos del arreglo
// Imprime los indices del arreglo
for (let posicion in arreglo) {
    console.log(posicion);
}

// Imprime elementos del arreglo
for (let posicion of arreglo) {
    console.log(posicion);
}

// Objetos

const objeto = {atributo: "valor", atributo2: "valor2"};
objeto.atributo3 = 5;
console.log(objeto);

for (let atributo in objeto){
    console.log(atributo);
}

// Modificar html

// Solo por mientras modifica el html
// document.write("Hola");