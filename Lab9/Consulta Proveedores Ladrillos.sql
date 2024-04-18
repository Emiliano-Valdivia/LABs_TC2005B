SELECT DISTINCT M.clave AS PRODUCTO, razonsocial AS PROVEEDOR
FROM materiales M NATURAL JOIN entregan NATURAL JOIN proveedores
WHERE M.descripcion LIKE '%Ladrillos%'