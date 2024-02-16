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

const contador = (arreglo) => {
    let cont_0 = 0;
    let cont_pos = 0;
    let cont_neg = 0;
    for (let i in arreglo_num){
        if (arreglo_num[i] > 0){
            cont_pos += 1;
        }
        else if (arreglo_num[i] == 0){
            cont_0 += 1;
        }
        else {
            cont_neg += 1;
        }
    }
    return (cont_pos + " " + cont_neg + " " + cont_0);
};

const arreglo_num = [23, -2, 0, 4, 98, -42, 0, -3, -2, -6, 0, 2, 6, 7];
const answer = contador(arreglo_num);

document.write("<p>Teniendo el siguiente arreglo: </p>");
document.write("<code> [23, -2, 0, 4, 98, -42, 0, -3, -2, -6, 0, 2, 6, 7] </code>");
document.write("<p>Debería de haber 6 números positivos, 5 negativos, y 3 que son cero.</p>")
document.write("<p>La función de contador dice que hay " + answer + "</p>");
document.write("<p>Se utilizó 'console.assert(answer == 6 + ' ' + 5 + ' ' + 3)' para verificar esto. </p>");
console.assert(answer == (6 + " " + 5 + " " + 3));

// Ejercicio 4: Promedios
document.write("</article><article> <h3>Promedios en una matríz</h3>"); 

const promedio = (matriz) => {
    arreglo_respuesta = [];
    for (i in matriz){
        let sum_renglon = 0;
        let count = 0;
        for (j in matriz[i]){
            sum_renglon += matriz[i][j];
            count += 1;
        }
        arreglo_respuesta.push(sum_renglon/count);
    }
    return arreglo_respuesta;
}

const matriz = [ [2, 65, 54, 25, 43], [6, 42, 94, 3], [4, 541, 1, 46, 2, 3, 5, 7] ];
const arreglo_res = promedio(matriz);

document.write("<p>Teniendo el siguiente arreglo: </p>");
document.write("<code> [ [2, 65, 54, 25, 43], [6, 42, 94, 3], [4, 541, 1, 46, 2, 3, 5, 7] ] </code>");
document.write("<p>El promedio del primer renglón de la matriz debe ser 37.8.</p>")
document.write("<p>El promedio del segundo renglón de la matriz debe ser 36.25.</p>")
document.write("<p>El promedio del tercer renglón de la matriz debe ser 76.125.</p>")
document.write("<p>La función de promedio dice que hay " + "<code>[" + arreglo_res + "]</code>" + "</p>");

//Ejercicio 5: Inverso
document.write("</article><article> <h3>Inverso</h3>"); 
