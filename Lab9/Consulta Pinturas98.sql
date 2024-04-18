SELECT M.descripcion AS Material, razonsocial AS Proveedor, denominacion AS Proyecto, fecha, cantidad
FROM materiales M NATURAL JOIN entregan NATURAL JOIN proveedores NATURAL JOIN proyectos
WHERE M.descripcion LIKE '%pintura%' AND fecha LIKE '%1998%'