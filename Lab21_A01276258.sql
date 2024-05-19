SELECT SUM(cantidad) AS Cantidad_Total, SUM(precio) AS Importe_Total
FROM entregan NATURAL JOIN materiales
WHERE YEAR(fecha) = 1997

SELECT razonsocial AS Proveedor, COUNT(RFC) AS Entregas, SUM(precio) AS Importe_Total
FROM entregan NATURAL JOIN proveedores NATURAL JOIN materiales
GROUP BY RFC

SELECT clave AS Clave_material, descripcion AS Material, SUM(cantidad) AS Total_entregado, MIN(cantidad) AS Minimo_entregado, MAX(cantidad) AS Maximo_entregado, SUM(precio) AS Importe_total
FROM entregan NATURAL JOIN materiales
GROUP BY clave
HAVING AVG(cantidad) > 400

SELECT razonsocial AS Proveedor, AVG(cantidad) AS Promedio_entregado, clave AS Clave_material, descripcion AS Material
FROM entregan NATURAL JOIN materiales NATURAL JOIN proveedores
GROUP BY clave
HAVING AVG(cantidad) >= 500

SELECT razonsocial AS Proveedor, AVG(cantidad) AS Promedio_entregado, clave AS Clave_material, descripcion AS Material
FROM entregan NATURAL JOIN materiales NATURAL JOIN proveedores
GROUP BY clave
HAVING AVG(cantidad) > 450 OR AVG(cantidad) < 370
ORDER BY AVG(cantidad)

INSERT INTO materiales VALUES
(2010, 'Vidrio', 160, 16),
(2020, 'Plafón', 100, 10),
(2030, 'Cable', 50, 5),
(2040, 'Madera', 120, 12),
(2050, 'Malla', 145, 14.5);

SELECT clave AS Clave_material, descripcion AS Material
FROM materiales
WHERE clave NOT IN (SELECT clave
							FROM entregan
							GROUP BY clave)

SELECT DISTINCT razonsocial AS Proveedor
FROM proveedores NATURAL JOIN entregan NATURAL JOIN proyectos
WHERE denominacion = 'Vamos Mexico' AND rfc IN (SELECT rfc
												FROM entregan NATURAL JOIN proyectos
												WHERE denominacion = 'Queretaro Limpio')

SELECT descripcion AS Material
FROM materiales
WHERE clave NOT IN (SELECT clave
							FROM entregan NATURAL JOIN proyectos
							WHERE denominacion = 'CIT Yucatan')

SELECT razonsocial AS Proveedor, AVG(cantidad) AS Promedio_entregado
FROM entregan NATURAL JOIN proveedores
GROUP BY rfc
HAVING AVG(cantidad) > (SELECT AVG(cantidad)
									FROM entregan NATURAL JOIN proveedores
									WHERE rfc = 'FFFF800101')

