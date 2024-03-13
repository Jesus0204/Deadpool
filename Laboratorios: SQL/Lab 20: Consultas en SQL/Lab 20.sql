Use Lab20;

/* Si algún material no ha se ha entregado ¿Aparecería en el resultado de esta consulta? -
No aparecería, ya que en entregan solo se encuentran los registros de lo que sí se entrego 
Habría que usar una subconsulta para poder hacer esto por ejemplo. */

/* ¿Cuál sería una consulta que obtuviera el mismo resultado sin usar el operador Unión? Compruébalo. */
SELECT * FROM entregan WHERE clave=1430 OR clave=1300;

/* ¿Cómo está definido el número de tuplas de este resultado en términos del número de tuplas de entregan y de materiales? 
Que se suman las tuplas que tiene materiales con las de entrega, y pone todas las combinaciones posibles (un provedor, con cada material, precio, etc. */

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
/* Ahora solo se obtiene una vez el resultado, por la palabra distinct */

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

DECLARE @foo varchar(40);
DECLARE @bar varchar(40);
SET @foo = '¿Que resultado';
SET @bar = ' ¿¿¿??? '
SET @foo += ' obtienes?';
PRINT @foo + @bar;

/* ¿Qué resultado obtienes de ejecutar el siguiente código? - 
Se obtiene '¿Que resultado obtienes? ¿¿¿???

¿Para qué sirve DECLARE? -
Para declarar una variable dentro de SQL 

¿Cuál es la función de @foo? -
Foo guarda '¿Que resultado obtienes?' (de forma separada)

¿Que realiza el operador SET? -
El operador SET actualiza un registro con lo que le defines. Esto tambien se usa en update Table por ejemplo*/

/* La primera consulta busca en la tabla entregan RFC que incluyan de la A a la D, mientras que la segunda consulta es que empiecen con A. */
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

/* ¿Qué hace la consulta? - La consulta regresa registros donde el número de entrega este entre 5000 y 5010 donde aparte la razón social del proveedor inicie con La (como la frague).

¿Qué función tiene el paréntesis ( ) después de EXISTS? - 
Se usa una subconsulta donde ahi saca el RFC de los provedores que inician con La. 
El parentesis se pone para ejecutar la subconsulta y que regrese registros que esten en ambas */ 

/* Tomando de base la consulta anterior del EXISTS, realiza el query que devuelva el mismo resultado, pero usando el operador IN */
/* Hay que pasarle el atributo que queremos que busque en el subquery */
SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero Between 5000 and 5010 AND
RFC In (SELECT RFC
FROM Proveedores
WHERE RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC);

/* Tomando de base la consulta anterior del EXISTS, realiza el query que devuelva el mismo resultado, pero usando el operador NOT IN */
SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero Between 5000 and 5010 AND
RFC NOT In (SELECT RFC
FROM Proveedores
WHERE RazonSocial NOT LIKE 'La%' and Entregan.RFC = Proveedores.RFC);

/* ¿Qué hace la siguiente sentencia? Explica por qué. 
Saca los primeros dos registros de la tabla de proyectos. 
Es una palabra reservada que no funciona en todos los sistemas DB (como MYSQL). Ahí se tiene que usar top.*/
SELECT TOP 2 * FROM Proyectos;

/* ¿Qué sucede con la siguiente consulta? Explica por qué. 
Esta consulta está incorrecta ya que Numero lo toma como variable y es una columna de la tabla por lo que regresa error. */
SELECT TOP Numero FROM Proyectos;

/* Modifica la tabla materiales y le agrega columna PorcentajeImpuesto Numerica */
ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2);
/* Como los registros estan vacios, hacemos update de materiales donde con set ponemos el calculo de impuestos */
UPDATE materiales SET PorcentajeImpuesto = 2*clave/1000;

/* ¿Qué consulta usarías para obtener el importe de las entregas es decir, el total en dinero de lo entregado, basado en la cantidad de la entrega y el precio del material y el impuesto asignado? */

/* Views */
CREATE VIEW Provedores_QueEmpiezancon_La
AS SELECT Entregan.RFC, Entregan.Cantidad, Entregan.Fecha, Entregan.numero
FROM Proveedores, Entregan
WHERE RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC;

/* Query anterior con la view que regresa lo mismo */
SELECT RFC,Cantidad, Fecha,Numero
FROM Provedores_QueEmpiezancon_La
WHERE Numero Between 5000 and 5010;

/* Los materiales (clave y descripción) entregados al proyecto "México sin ti no estamos completos". */
SELECT M.clave, descripcion 
FROM materiales AS M, Entregan AS E, proyectos AS P
WHERE M.clave = E.clave AND E.numero = P.numero AND
P.denominacion = 'México sin ti no estamos completos';

/* Los materiales (clave y descripción) que han sido proporcionados por el proveedor "Acme tools". */
SELECT M.clave, descripcion
FROM materiales AS M, Entregan AS E, Proveedores As Prov
WHERE M.clave = E.Clave AND E.rfc = Prov.rfc AND 
Prov.razonsocial = 'Acme tools';

/* El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales. */
SELECT RFC, Avg(cantidad) AS 'Promedio de entregas'
FROM Entregan
WHERE fecha Between '2000-01-01' AND '2000-12-31' 
GROUP BY RFC
HAVING Avg(cantidad) < 300;

/* El Total entregado por cada material en el año 2000. */
SELECT SUM(E.cantidad) AS 'Total entregado', M.descripcion
FROM Entregan AS E
WHERE E.fecha Between '2000-01-01' AND '2000-12-31' 
GROUP BY E.clave;

/* La Clave del material más vendido durante el 2001. (se recomienda usar una vista intermedia para su solución) */
SELECT SUM(cantidad), clave
FROM Entregan
WHERE fecha Between '2001-01-01' AND '2001-12-31'
GROUP BY clave
ORDER BY SUM(cantidad) DESC
Limit 1;

/* Productos que contienen el patrón 'ub' en su nombre. */
SELECT descripcion
FROM Materiales
WHERE descripcion LIKE '%ub%'

/* Denominación y suma del total a pagar para todos los proyectos. */
SELECT denominacion, SUM((precio + impuesto) * cantidad) AS "Total a pagar"
FROM Materiales AS M, Entregan AS E, Proyectos AS P
WHERE M.clave = E.clave AND E.numero = P.numero
GROUP BY denominacion
ORDER BY denominacion;

/* Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando en Coahuila (Solo usando vistas). */
CREATE VIEW Proyectos_Televisa AS
SELECT DISTINCT denominacion, Prov.RFC, Prov.RazonSocial
FROM proveedores AS Prov, entregan AS E, proyectos AS P
WHERE Prov.rfc = E.rfc AND E.numero = P.numero AND 
denominacion = 'Televisa en acción';

CREATE VIEW Proyectos_Educando_Coahuila AS
SELECT Prov.RazonSocial
FROM proveedores AS Prov, entregan AS E, proyectos AS P
WHERE Prov.rfc = E.rfc AND E.numero = P.numero AND 
P.denominacion = 'Educando en Coahuila';

SELECT DISTINCT denominacion, RFC, RazonSocial
FROM Proyectos_Televisa 
WHERE RazonSocial NOT IN (SELECT RazonSocial FROM Proyectos_Educando_Coahuila);

/* Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando en Coahuila 
(Sin usar vistas, utiliza not in, in o exists). */
SELECT DISTINCT denominacion, Prov.RFC, Prov.RazonSocial
FROM proveedores AS Prov, entregan AS E, proyectos AS P
WHERE Prov.rfc = E.rfc AND E.numero = P.numero AND 
denominacion = 'Televisa en acción' AND 
Prov.RazonSocial NOT IN (SELECT Prov.RazonSocial
FROM proveedores AS Prov, entregan AS E, proyectos AS P
WHERE Prov.rfc = E.rfc AND E.numero = P.numero AND 
P.denominacion = 'Educando en Coahuila');

/* Costo de los materiales y los Materiales que son entregados al proyecto Televisa en acción cuyos proveedores también suministran materiales al proyecto Educando en Coahuila. */
CREATE VIEW Materiales_Televisa AS
SELECT precio, descripcion, Prov.RazonSocial
FROM Materiales As M, entregan AS E, proyectos AS P, proveedores AS Prov
WHERE M.clave = E.clave AND E.numero = P.numero AND E.rfc = Prov.rfc AND 
P.denominacion = 'Televisa en acción';

CREATE VIEW Provedores_coahuila AS
SELECT Prov.RazonSocial
FROM Materiales As M, entregan AS E, proyectos AS P, proveedores AS Prov
WHERE M.clave = E.clave AND E.numero = P.numero AND E.rfc = Prov.rfc AND
P.denominacion = 'Educando en Coahuila';

SELECT precio, descripcion, RazonSocial
FROM Materiales_Televisa
WHERE RazonSocial IN (SELECT RazonSocial FROM Provedores_coahuila);

/* Nombre del material, cantidad de veces entregados y total del costo de dichas entregas por material de todos los proyectos. */
SELECT M.descripcion, Count(E.clave) AS 'Cantidad Entregado', 
Sum((M.precio + M.impuesto) * E.cantidad) AS 'Total de costo'
FROM Entregan As E, Materiales AS M
WHERE E.clave = M.clave
GROUP BY E.clave
ORDER BY M.descripcion;