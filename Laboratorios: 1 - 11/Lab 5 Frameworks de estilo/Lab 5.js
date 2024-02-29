// Ejercicio 1: Tabla de cuadrados y cubos
const num_usuario = prompt("Por favor dime un número. Ya verás para qué es ;)")

for (let i = 1; i <= num_usuario; i++){
    document.write("<tr> <td>" + i + "</td>");
    document.write("<td>" + (i * i) + "</td>");
    document.write("<td>" + (i * i * i) + "</td> </tr>");
}

document.write("</table>"); 
