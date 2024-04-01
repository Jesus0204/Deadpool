/* La suma de las cantidades e importe total de todas las entregas realizadas durante el 97. */

SELECT SUM(E.cantidad) AS 'Cantidad Total', 
SUM(Cantidad * (M.precio + M.impuesto)) AS 'Importe Total'
FROM Entregan AS E, Materiales AS M
WHERE E.clave = M.clave AND YEAR(E.fecha) = '1997';

/* Para cada proveedor, obtener la razón social del proveedor, 
número de entregas e importe total de las entregas realizadas. */

SELECT P.razonsocial 'Razon Social', COUNT(E.RFC) AS 'Número de entregas', 
SUM(Cantidad * (M.precio + M.impuesto)) AS 'Importe Total'
FROM Proveedores AS P, Entregan AS E, Materiales AS M
WHERE P.RFC = E.RFC AND M.clave = E.clave
GROUP BY P.RFC;

/* Por cada material obtener la clave y descripción del material, 
la cantidad total entregada, la mínima cantidad entregada, 
la máxima cantidad entregada, 
el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400. */

SELECT M.clave, M.descripción, SUM(E.Cantidad) AS 'Cantidad entregada',
SUM(E.Cantidad * (M.precio + M.impuesto)) AS 'Importe Total', 
MIN(E.Cantidad) AS 'Cantidad minima',
MAX(E.cantidad) AS 'Cantidad Maxima'
FROM Materiales AS M, Entregan AS E 
WHERE M.clave = E.clave
GROUP BY M.clave
HAVING AVG(E.Cantidad) > '400';

/* Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, 
detallando la clave y descripción del material,
excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500. */

SELECT P.razonsocial, AVG(E.Cantidad) AS 'Promedio de Entregas', M.clave, M.descripcion
FROM Proveedores AS P, Entregan AS E, Materiales AS M
WHERE P.RFC = E.RFC AND E.clave = M.clave
GROUP BY P.razonsocial, M.Clave
HAVING AVG(E.Cantidad) > 500;

/* Mostrar en una solo consulta los mismos datos que en la consulta anterior 
pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 
y aquellos para los que la cantidad promedio entregada sea mayor a 450. */
SELECT P.razonsocial, AVG(E.Cantidad) AS 'Promedio de Entregas', M.clave, M.descripcion
FROM Proveedores AS P, Entregan AS E, Materiales AS M
WHERE P.RFC = E.RFC AND E.clave = M.clave
GROUP BY P.razonsocial, M.clave
HAVING AVG(E.Cantidad) < 370 OR AVG(E.Cantidad) > 450;

/* Agregar 5 materiales a la base de datos */
INSERT INTO Materiales VALUES ('5000', 'MacBook Pro 2021', '600', '60', '2.34');
INSERT INTO Materiales VALUES ('5001', 'Windows Chafa', '240', '24', '2.64');
INSERT INTO Materiales VALUES ('5002', 'Alex', '1000', '100', '2.43');
INSERT INTO Materiales VALUES ('5003', 'iPhone', '2000', '200', '2.29');
INSERT INTO Materiales VALUES ('5004', 'Samsung', '345', '34.5', '2.57');

/* Clave y descripción de los materiales que nunca han sido entregados. */
SELECT M.Clave, M.Descripcion 
FROM Materiales AS M
WHERE M.Clave NOT IN (SELECT Clave FROM Entregan);

/* Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'. */
SELECT razonsocial
FROM Proveedores
WHERE RFC IN (SELECT E.RFC FROM Entregan AS E, Proyectos AS P
WHERE E.numero = P.numero AND P.Denominacion = 'Vamos México') 
AND RFC IN (SELECT E.RFC FROM Entregan AS E, Proyectos AS P
WHERE E.numero = P.numero AND P.Denominacion = 'Querétaro Limpio');

/* Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'. */
SELECT Descripcion
FROM Materiales 
WHERE Clave NOT IN 
(SELECT E.clave FROM Entregan AS E, Proyectos AS P 
WHERE E.numero = P.numero AND P.Denominacion = 'CIT Yucatán')

/* Razón social y promedio de cantidad entregada de los proveedores 
cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada 
por el proveedor con el RFC 'VAGO780901'. */

/* RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' 
y cuyas cantidades totales entregadas en el 2000 fueron mayores 
a las cantidades totales entregadas en el 2001. */
SELECT RFC, razonsocial
FROM Proveedores
