-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         11.3.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para dbescritorio
CREATE DATABASE IF NOT EXISTS `dbescritorio` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `dbescritorio`;

-- Volcando estructura para tabla dbescritorio.entregan
CREATE TABLE IF NOT EXISTS `entregan` (
  `Clave` bigint(20) NOT NULL,
  `RFC` varchar(15) NOT NULL,
  `Numero` bigint(20) NOT NULL,
  `Fecha` date NOT NULL,
  `Cantidad` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`Clave`,`RFC`,`Numero`,`Fecha`),
  KEY `RFC` (`RFC`),
  KEY `Numero` (`Numero`),
  CONSTRAINT `entregan_ibfk_1` FOREIGN KEY (`Clave`) REFERENCES `materiales` (`Clave`),
  CONSTRAINT `entregan_ibfk_2` FOREIGN KEY (`RFC`) REFERENCES `proveedores` (`RFC`),
  CONSTRAINT `entregan_ibfk_3` FOREIGN KEY (`Numero`) REFERENCES `proyectos` (`Numero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla dbescritorio.entregan: ~131 rows (aproximadamente)
INSERT INTO `entregan` (`Clave`, `RFC`, `Numero`, `Fecha`, `Cantidad`) VALUES
	(1000, 'AAAA800101', 5019, '1999-08-08', 254),
	(1000, 'AAAA800101', 5019, '2000-06-04', 7),
	(1010, 'BBBB800101', 5001, '2000-03-05', 528),
	(1010, 'BBBB800101', 5018, '2000-11-10', 667),
	(1010, 'BBBB800101', 5018, '2004-05-03', 523),
	(1020, 'CCCC800101', 5002, '2003-05-07', 582),
	(1020, 'CCCC800101', 5017, '1999-04-02', 8),
	(1020, 'CCCC800101', 5017, '2001-04-05', 478),
	(1030, 'DDDD800101', 5003, '1999-09-02', 202),
	(1030, 'DDDD800101', 5016, '1998-09-04', 139),
	(1030, 'DDDD800101', 5016, '2000-05-11', 295),
	(1040, 'EEEE800101', 5004, '1999-12-11', 263),
	(1040, 'EEEE800101', 5015, '2000-10-06', 546),
	(1040, 'EEEE800101', 5015, '2002-12-07', 540),
	(1050, 'FFFF800101', 5005, '2000-10-14', 503),
	(1050, 'FFFF800101', 5014, '1999-04-06', 90),
	(1050, 'FFFF800101', 5014, '1999-07-03', 623),
	(1060, 'GGGG800101', 5006, '2000-04-05', 324),
	(1060, 'GGGG800101', 5013, '2000-02-01', 692),
	(1060, 'GGGG800101', 5013, '2000-10-07', 47),
	(1070, 'HHHH800101', 5007, '1999-11-02', 2),
	(1070, 'HHHH800101', 5012, '1999-03-12', 503),
	(1070, 'HHHH800101', 5012, '2000-01-04', 516),
	(1080, 'AAAA800101', 5008, '1999-12-01', 86),
	(1080, 'AAAA800101', 5011, '2002-07-11', 699),
	(1080, 'AAAA800101', 5011, '2003-01-06', 429),
	(1090, 'BBBB800101', 5009, '2000-01-08', 73),
	(1090, 'BBBB800101', 5010, '1998-03-01', 421),
	(1090, 'BBBB800101', 5010, '1998-06-06', 612),
	(1100, 'CCCC800101', 5009, '2000-06-08', 466),
	(1100, 'CCCC800101', 5009, '2002-07-05', 523),
	(1100, 'CCCC800101', 5010, '2001-10-09', 699),
	(1110, 'DDDD800101', 5008, '1999-10-05', 337),
	(1110, 'DDDD800101', 5008, '2000-09-02', 292),
	(1110, 'DDDD800101', 5011, '2005-04-06', 368),
	(1120, 'EEEE800101', 5007, '1998-12-03', 167),
	(1120, 'EEEE800101', 5007, '2001-07-07', 692),
	(1120, 'EEEE800101', 5012, '2001-03-04', 215),
	(1130, 'FFFF800101', 5006, '1999-06-05', 673),
	(1130, 'FFFF800101', 5006, '2002-06-07', 562),
	(1130, 'FFFF800101', 5013, '2002-04-04', 63),
	(1140, 'GGGG800101', 5005, '1998-07-02', 651),
	(1140, 'GGGG800101', 5005, '2001-02-09', 583),
	(1140, 'GGGG800101', 5014, '2001-12-07', 219),
	(1150, 'HHHH800101', 5004, '2001-10-08', 453),
	(1150, 'HHHH800101', 5004, '2003-01-09', 270),
	(1150, 'HHHH800101', 5015, '1999-04-03', 458),
	(1160, 'AAAA800101', 5016, '2000-01-06', 162),
	(1160, 'AAAA800101', 5019, '1999-09-06', 244),
	(1160, 'AAAA800101', 5019, '2002-08-02', 665),
	(1170, 'BBBB800101', 5017, '1998-04-02', 180),
	(1170, 'BBBB800101', 5018, '1999-11-12', 53),
	(1170, 'BBBB800101', 5018, '2001-06-08', 517),
	(1180, 'CCCC800101', 5017, '2001-01-06', 216),
	(1180, 'CCCC800101', 5017, '2001-03-03', 334),
	(1180, 'CCCC800101', 5018, '2003-02-06', 407),
	(1190, 'DDDD800101', 5016, '2000-04-02', 356),
	(1190, 'DDDD800101', 5016, '2003-07-03', 622),
	(1190, 'DDDD800101', 5019, '1998-12-09', 94),
	(1200, 'EEEE800101', 5000, '2000-05-03', 177),
	(1200, 'EEEE800101', 5015, '2000-06-05', 585),
	(1200, 'EEEE800101', 5015, '2000-10-07', 653),
	(1210, 'FFFF800101', 5001, '1999-05-11', 43),
	(1210, 'FFFF800101', 5014, '2001-03-11', 70),
	(1210, 'FFFF800101', 5014, '2001-06-09', 479),
	(1220, 'GGGG800101', 5002, '2003-01-02', 24),
	(1220, 'GGGG800101', 5013, '2001-08-02', 653),
	(1220, 'GGGG800101', 5013, '2002-04-07', 658),
	(1230, 'HHHH800101', 5003, '2003-06-01', 530),
	(1230, 'HHHH800101', 5012, '1999-08-03', 115),
	(1230, 'HHHH800101', 5012, '2002-09-12', 312),
	(1240, 'AAAA800101', 5004, '2003-12-01', 152),
	(1240, 'AAAA800101', 5011, '2000-12-08', 366),
	(1240, 'AAAA800101', 5011, '2003-05-08', 549),
	(1250, 'BBBB800101', 5005, '2002-08-07', 71),
	(1250, 'BBBB800101', 5010, '1998-08-05', 690),
	(1250, 'BBBB800101', 5010, '2002-04-04', 691),
	(1260, 'CCCC800101', 5006, '1999-10-05', 460),
	(1260, 'CCCC800101', 5009, '1999-09-08', 631),
	(1260, 'CCCC800101', 5009, '2003-10-02', 2),
	(1270, 'DDDD800101', 5007, '1999-10-03', 506),
	(1270, 'DDDD800101', 5008, '1997-03-09', 546),
	(1270, 'DDDD800101', 5008, '2002-12-04', 324),
	(1280, 'EEEE800101', 5007, '2000-03-02', 331),
	(1280, 'EEEE800101', 5007, '2002-07-12', 448),
	(1280, 'EEEE800101', 5008, '2004-05-07', 107),
	(1290, 'FFFF800101', 5006, '1999-07-01', 336),
	(1290, 'FFFF800101', 5006, '2001-08-02', 279),
	(1290, 'FFFF800101', 5009, '1998-08-01', 132),
	(1300, 'GGGG800101', 5005, '2002-10-06', 521),
	(1300, 'GGGG800101', 5005, '2003-02-02', 457),
	(1300, 'GGGG800101', 5010, '2003-08-01', 119),
	(1310, 'HHHH800101', 5011, '2002-12-04', 72),
	(1310, 'HHHH800101', 5019, '2000-03-08', 463),
	(1310, 'HHHH800101', 5019, '2002-02-10', 199),
	(1320, 'AAAA800101', 5012, '2003-06-01', 698),
	(1320, 'AAAA800101', 5018, '1999-03-12', 163),
	(1320, 'AAAA800101', 5018, '2000-07-03', 413),
	(1330, 'BBBB800101', 5013, '1998-12-10', 554),
	(1330, 'BBBB800101', 5017, '1998-12-06', 558),
	(1330, 'BBBB800101', 5017, '2000-11-08', 93),
	(1340, 'CCCC800101', 5014, '2002-02-12', 324),
	(1340, 'CCCC800101', 5016, '1998-06-11', 674),
	(1340, 'CCCC800101', 5016, '1999-10-02', 11),
	(1350, 'DDDD800101', 5015, '1999-02-08', 261),
	(1350, 'DDDD800101', 5015, '1999-05-06', 330),
	(1350, 'DDDD800101', 5015, '1999-09-05', 272),
	(1360, 'EEEE800101', 5014, '2001-06-07', 37),
	(1360, 'EEEE800101', 5014, '2002-07-04', 265),
	(1360, 'EEEE800101', 5016, '2000-07-11', 364),
	(1370, 'FFFF800101', 5013, '2000-08-04', 575),
	(1370, 'FFFF800101', 5013, '2002-05-06', 423),
	(1370, 'FFFF800101', 5017, '2000-12-02', 44),
	(1380, 'GGGG800101', 5012, '1998-08-07', 645),
	(1380, 'GGGG800101', 5012, '2001-01-02', 147),
	(1380, 'GGGG800101', 5018, '2002-03-03', 302),
	(1390, 'HHHH800101', 5011, '2001-08-11', 697),
	(1390, 'HHHH800101', 5011, '2002-06-01', 308),
	(1390, 'HHHH800101', 5019, '2003-12-01', 107),
	(1400, 'AAAA800101', 5000, '2002-12-03', 382),
	(1400, 'AAAA800101', 5010, '1998-05-06', 116),
	(1400, 'AAAA800101', 5010, '2002-03-05', 441),
	(1410, 'BBBB800101', 5001, '2000-05-02', 601),
	(1410, 'BBBB800101', 5009, '2002-03-05', 467),
	(1410, 'BBBB800101', 5009, '2002-05-11', 461),
	(1420, 'CCCC800101', 5002, '1998-07-04', 603),
	(1420, 'CCCC800101', 5008, '2000-02-08', 278),
	(1420, 'CCCC800101', 5008, '2001-12-02', 444),
	(1430, 'DDDD800101', 5003, '1999-02-09', 576),
	(1430, 'DDDD800101', 5007, '1998-09-01', 13),
	(1430, 'DDDD800101', 5007, '2002-10-06', 506);

-- Volcando estructura para tabla dbescritorio.materiales
CREATE TABLE IF NOT EXISTS `materiales` (
  `Clave` bigint(20) NOT NULL,
  `Descripcion` varchar(100) DEFAULT NULL,
  `Precio` int(11) DEFAULT NULL,
  PRIMARY KEY (`Clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla dbescritorio.materiales: ~44 rows (aproximadamente)
INSERT INTO `materiales` (`Clave`, `Descripcion`, `Precio`) VALUES
	(1000, 'Varilla 3/16', 100),
	(1010, 'Varilla 4/32', 115),
	(1020, 'Varilla 3/17', 130),
	(1030, 'Varilla 4/33', 145),
	(1040, 'Varilla 3/18', 160),
	(1050, 'Varilla 4/34', 175),
	(1060, 'Varilla 3/19', 190),
	(1070, 'Varilla 4/35', 205),
	(1080, 'Ladrillos rojos', 50),
	(1090, 'Ladrillos grises', 35),
	(1100, 'Block', 30),
	(1110, 'Megablock', 40),
	(1120, 'Sillar rosa', 100),
	(1130, 'Sillar gris', 110),
	(1140, 'Cantera blanca', 200),
	(1150, 'Cantera gris', 1210),
	(1160, 'Cantera rosa', 1420),
	(1170, 'Cantera amarilla', 230),
	(1180, 'Recubrimiento P1001', 200),
	(1190, 'Recubrimiento P1010', 220),
	(1200, 'Recubrimiento P1019', 240),
	(1210, 'Recubrimiento P1028', 250),
	(1220, 'Recubrimiento P1037', 280),
	(1230, 'Cemento ', 300),
	(1240, 'Arena', 200),
	(1250, 'Grava', 100),
	(1260, 'Gravilla', 90),
	(1270, 'Tezontle', 80),
	(1280, 'Tepetate', 34),
	(1290, 'Tubería 3.5', 200),
	(1300, 'Tubería 4.3', 210),
	(1310, 'Tubería 3.6', 220),
	(1320, 'Tubería 4.4', 230),
	(1330, 'Tubería 3.7', 240),
	(1340, 'Tubería 4.5', 250),
	(1350, 'Tubería 3.8', 260),
	(1360, 'Pintura C1010', 125),
	(1370, 'Pintura B1020', 125),
	(1380, 'Pintura C1011', 725),
	(1390, 'Pintura B1021', 125),
	(1400, 'Pintura C1011', 125),
	(1410, 'Pintura B1021', 125),
	(1420, 'Pintura C1012', 125),
	(1430, 'Pintura B1022', 125);

-- Volcando estructura para tabla dbescritorio.proveedores
CREATE TABLE IF NOT EXISTS `proveedores` (
  `RFC` varchar(15) NOT NULL,
  `RazonSocial` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RFC`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla dbescritorio.proveedores: ~8 rows (aproximadamente)
INSERT INTO `proveedores` (`RFC`, `RazonSocial`) VALUES
	('AAAA800101', 'La fragua'),
	('BBBB800101', 'Oviedo'),
	('CCCC800101', 'La Ferre'),
	('DDDD800101', 'Cecoferre'),
	('EEEE800101', 'Alvin'),
	('FFFF800101', 'Comex'),
	('GGGG800101', 'Tabiquera del centro'),
	('HHHH800101', 'Tubasa');

-- Volcando estructura para tabla dbescritorio.proyectos
CREATE TABLE IF NOT EXISTS `proyectos` (
  `Numero` bigint(20) NOT NULL,
  `Denominacion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Numero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla dbescritorio.proyectos: ~20 rows (aproximadamente)
INSERT INTO `proyectos` (`Numero`, `Denominacion`) VALUES
	(5000, 'Vamos Mexico'),
	(5001, 'Aztecón'),
	(5002, 'CIT Campeche'),
	(5003, 'Mexico sin ti no estamos completos'),
	(5004, 'Educando en Coahuila'),
	(5005, 'Infonavit Durango'),
	(5006, 'Reconstrucción del templo de Guadalupe'),
	(5007, 'Construcción de plaza Magnolias'),
	(5008, 'Televisa en acción'),
	(5009, 'Disco Atlantic'),
	(5010, 'Construcción de Hospital Infantil'),
	(5011, 'Remodelación de aulas del IPP'),
	(5012, 'Restauración de instalaciones del CEA'),
	(5013, 'Reparación de la plaza Sonora'),
	(5014, 'Remodelación de Soriana'),
	(5015, 'CIT Yucatan'),
	(5016, 'Ampliación de la carretera a la huasteca'),
	(5017, 'Reparación de la carretera del sol'),
	(5018, 'Tu cambio por la educación'),
	(5019, 'Queretaro limpio');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
