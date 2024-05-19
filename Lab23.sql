-- Procedimientos para la base de datos creada en el laboratorio 15

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_promedioprov`(
	IN `provname` VARCHAR(25)
)
LANGUAGE SQL
NOT DETERMINISTIC
CONTAINS SQL
SQL SECURITY DEFINER
COMMENT ''
BEGIN
	SELECT AVG(cantidad) AS Promedio_Entregas
	FROM proveedores NATURAL JOIN entregan 
	WHERE razonsocial = provname;
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `entregas_anuales`(
	IN `año` INT
)
LANGUAGE SQL
NOT DETERMINISTIC
CONTAINS SQL
SQL SECURITY DEFINER
COMMENT ''
BEGIN
	SELECT *
	FROM entregan 
	WHERE YEAR(fecha) = año
	ORDER BY fecha;
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_materialesproyecto`(
	IN `proyecto` VARCHAR(50)
)
LANGUAGE SQL
NOT DETERMINISTIC
CONTAINS SQL
SQL SECURITY DEFINER
COMMENT ''
BEGIN
	SELECT descripcion
	FROM entregan NATURAL JOIN materiales NATURAL JOIN proyectos
	WHERE denominacion = proyecto;
END

