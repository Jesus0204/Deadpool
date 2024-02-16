// Ejercicio 1: Tabla de cuadrados y cubos
const num_usuario = prompt("Por favor dime un número. Ya verás para qué es ;)")

for (let i = 1; i <= num_usuario; i++){
    document.write("<tr> <td>" + i + "</td>");
    document.write("<td>" + (i * i) + "</td>");
    document.write("<td>" + (i * i * i) + "</td> </tr>");
}

// Ejercicio 2: Suma de números
document.write("</table><article> <h3>Suma de números</h3>"); 

let num_1 = Math.floor(Math.random() * 200);
let num_2 = Math.floor(Math.random() * 200);
let correct_sum = num_1 + num_2;

// Usé para buscar como tomar tiempo https://dev.to/saranshk/how-to-measure-javascript-execution-time-5h2
const time = Date.now();
const sum = prompt("Por favor escribe la suma de " + num_1 + " y " + num_2);
const time_passed = Date.now();
let time_took = time_passed - time;

if (correct_sum == sum){
    document.write("<p id='correct_green'>¡Correcto! " + num_1 + " y " + num_2 + " si es " + correct_sum + "!</p>");
    document.write("<p>Te tardaste un total de " + time_took / 1000 + " segundos");

}
else {
    document.write("<p id='incorrect_red'>¡Incorrecto! " + num_1 + " y " + num_2 + " NO es " + sum + "!</p>");
    document.write("<p id='correct_green'>El resultado correcto es: " + correct_sum + "</p>");
    document.write("<p>Te tardaste un total de " + time_took / 1000 + " segundos");
}

// Ejercicio 3: Contador
document.write("</article><article> <h3>Contador</h3>"); 



