SELECT SUM(sueldo)
FROM Elenco
GROUP BY nombre;

SELECT SUM(presupuesto)
FROM Pelicula
WHERE año LIKE %198%
GROUP BY nomestudio;

SELECT nombre, AVG(sueldo)
FROM Actor NATURAL JOIN Elenco
WHERE sexo="Hombre"
GROUP BY nombre
HAVING AVG(sueldo)>5000000;

SELECT DISTINCT titulo, año
FROM Pelicula
ORDER BY presupuesto ASC;

SELECT MAX(sueldo)
FROM Elenco NATURAL JOIN Actor 
WHERE sexo = "Mujer";