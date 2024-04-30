SELECT nombre
FROM Elenco NATURAL JOIN Actor
WHERE titulo = "Las brujas de Salem" AND sexo = "Mujer";

SELECT nombre
FROM Elenco NATURAL JOIN Pelicula
WHERE nomestudio = "MGM" AND año = 1995;

SELECT titulo
FROM Pelicula
WHERE duracion > (SELECT duracion
					FROM Pelicula
					WHERE titulo = "Lo que el viento se llevó" AND año = 1939);

SELECT A.nombre
FROM Productor A NATURAL JOIN Pelicula B
HAVING COUNT(B.idproductor) > (SELECT COUNT(D.idproductor)
							FROM Productor C NATURAL JOIN Pelicula D
							WHERE C.nombre = "George Lucas");

SELECT nombre
FROM Productor NATURAL JOIN Pelicula
WHERE titulo IN (SELECT titulo
					FROM Elenco
					WHERE nombre = "Sharon Stone");

SELECT titulo
FROM Pelicula
HAVING COUNT(titulo) > 1;