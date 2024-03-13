Use Lab20;

/* Si algún material no ha se ha entregado ¿Aparecería en el resultado de esta consulta? 
No aparecería, ya que en entregan solo se encuentran los registros de lo que sí se entrego 
Habría que usar una subconsulta para poder hacer esto por ejemplo. */

/* ¿Cuál sería una consulta que obtuviera el mismo resultado sin usar el operador Unión? Compruébalo. */

/* ¿Cómo está definido el número de tuplas de este resultado en términos del número de tuplas de entregan y de materiales? */

/* Plantea ahora una consulta para obtener las descripciones de los materiales entregados en el año 2000. */
SELECT Descripcion
FROM materiales AS M, entregan AS E
WHERE M.clave = E.clave AND
E.fecha BETWEEN '2000-01-01' AND '2000-12-31';
/* Hay varios registros que aparecen varias veces (por que tienen varias entregas a lo largo del tiempo */

/* Agrega la palabra distinct inmediatamente después de la palabra select a la consulta que planteaste antes. */
SELECT DISTINCT Descripcion
FROM materiales AS M, entregan AS E
WHERE M.clave = E.clave AND
E.fecha BETWEEN '2000-01-01' AND '2000-12-31';
/* Ahora solo se obtiene una vez el resultado, por la plabara distinct */


/* Obtén los números y denominaciones de los proyectos con las fechas y cantidades de sus entregas,
ordenadas por número de proyecto, presentando las fechas de la más reciente a la más antigua. */
SELECT P.numero, P.denominacion, E.fecha, E.cantidad
FROM proyectos AS P, entregan AS E
WHERE P.numero = E.numero
ORDER BY fecha DESC;

/* Modifique el ejemplo para que se adecue a la base de datos que se tiene */
SELECT * FROM proyectos where denominacion LIKE 'Re%';
/* 
¿Qué resultado obtienes? - Obtengo todos los proyectos cuya denominación empieza con Re
Explica que hace el símbolo '%'. - Es con comodin para que no importa que haya después salga el registro que se pidio
En mi caso importa que empiece con Re pero no con que acaba (ya que el % esta al principio)*/

SELECT * FROM proyectos where denominacion LIKE 'Re';
/* 
¿Qué resultado obtienes? - No sale nada en la consulta
Explica a qué se debe este comportamiento.
Se debe a que esta buscando una denominacion que sea Re, y como no existe sale vacia la consulta */

SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';
SELECT RFC FROM Entregan WHERE RFC LIKE '[^A]%';

/* Esta consulta busca registros en entregan de 4 digitos que acaben en 6.
Esto se logra por el caracter _ que es comodin aunque solo es un caracter. Como hay 3 _ 
son 3 numeros y un 6. Por eso entrega los numeros que acaban en 6 de 4 digitos. */
SELECT Numero FROM Entregan WHERE Numero LIKE '___6';

/* Bewteen es una palabra reservada que busca registros entre los dos rangos (incluyendo el numero) */
SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero Between 5000 and 5010;

/* Para filtrar rangos de fecha se puede usar el between y poner la fecha de inicio, y la fecha del fin usando el between */

SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero Between 5000 and 5010 AND
Exists ( SELECT RFC
FROM Proveedores
WHERE RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC);

/* ¿Qué hace la consulta? - La consulta regresa regsitros donde el numero de entrega este entre 5000 y 5010
donde aparte la razon social del provedor inicie con La (como la frague)

¿Qué función tiene el paréntesis ( ) después de EXISTS? - 
Se usa una subconsulta donde ahi saca el RFC de los provedores que inician con La. 
El parentesis se pone para ejecutar la subconsulta y que regrese registros que esten en ambas /* 
