-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2025 at 10:03 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `etelfutar`
--

-- --------------------------------------------------------

--
-- Table structure for table `chain`
--

CREATE TABLE `chain` (
  `Id` int(11) NOT NULL,
  `Nev` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chain`
--

INSERT INTO `chain` (`Id`, `Nev`) VALUES
(7, 'Alcatraz Ételbár'),
(0, 'Burger King'),
(8, 'Chens Étterem'),
(6, 'Corvinus Étterem'),
(2, 'KFC'),
(5, 'Lángos Ház'),
(3, 'Mcdonalds'),
(4, 'Papa Joe Saloon & Steakhouse');

-- --------------------------------------------------------

--
-- Table structure for table `ertekelesek`
--

CREATE TABLE `ertekelesek` (
  `Id` int(11) NOT NULL,
  `FelhasznaloId` int(11) NOT NULL,
  `EtteremId` int(11) NOT NULL,
  `Szoveg` varchar(255) NOT NULL,
  `Ertekeles` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `etelek`
--

CREATE TABLE `etelek` (
  `Id` int(11) NOT NULL,
  `nev` varchar(32) NOT NULL,
  `kaloria` int(11) NOT NULL,
  `ar` int(11) NOT NULL,
  `ChainId` int(11) NOT NULL,
  `Indexkep` varchar(224) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `etelek`
--

INSERT INTO `etelek` (`Id`, `nev`, `kaloria`, `ar`, `ChainId`, `Indexkep`) VALUES
(1, ' Big Tasty® ', 903, 3190, 3, 'https://s7d1.scene7.com/is/image/mcdonalds/NAT253_BigTasty_Termekkep_832x822_v2:nutrition-calculator-tile?wid=822&hei=822&dpr=off'),
(2, 'Big Mac® McMenü® Plusz', 965, 2590, 3, 'https://s7d1.scene7.com/is/image/mcdonalds/DIG_154_Menu_McMenuPlusz_832x822:nutrition-calculator-tile?wid=822&hei=822&dpr=off'),
(3, 'Málnás-krémtúrós pite', 246, 790, 3, 'https://s7d1.scene7.com/is/image/mcdonalds/AMalnasKremturosPite_Web_832x822:nutrition-calculator-tile?wid=822&hei=822&dpr=off'),
(4, 'McChicken®', 422, 750, 3, 'https://s7d1.scene7.com/is/image/mcdonalds/mcchicken-kep:nutrition-calculator-tile?wid=822&hei=822&dpr=off'),
(5, 'Sajtburger', 326, 750, 3, 'https://s7d1.scene7.com/is/image/mcdonalds/DIG_202_Sajtburger_Termekkep_832x822:nutrition-calculator-tile?wid=822&hei=822&dpr=off'),
(6, 'Sajtburger McMoment® menü', 231, 1340, 3, 'https://s7d1.scene7.com/is/image/mcdonalds/DIG_122_Weboldal_Termekkep_Szendvics_Duplasajtburger_jalapeno_832x822:nutrition-calculator-tile'),
(7, 'Bacon King', 1288, 3220, 0, 'https://burgerking.hu/app/uploads/2024/09/BaconKing_690x387px.png'),
(8, 'Dupla WHOPPER®', 1059, 2490, 0, 'https://www.burgerking.ee/images/optimized/products/dbl-whopper-desktop-9a3769cafad2eb0eb9c40e583b5a6642.png'),
(9, 'WHOPPER® Jr.', 368, 1390, 0, 'https://www.burgerking.ee/images/optimized/products/whopper-jr-desktop-1fa41c48157077fcd15ef66636aa8466.png'),
(10, 'Chicken Bacon King', 773, 2870, 0, 'https://burgerking.hu/app/uploads/2024/09/ChickenBaconKing_690x387px.png'),
(11, '25 kosár', 208, 4990, 2, 'https://sawepecomcdn.blob.core.windows.net/kfc-web-ordering/KFC_HUN/16_Kosarak/440x440/25_bucket_440x440.png');

-- --------------------------------------------------------

--
-- Table structure for table `ettermek`
--

CREATE TABLE `ettermek` (
  `Id` int(11) NOT NULL,
  `Cim` varchar(32) NOT NULL,
  `ChainId` int(11) NOT NULL,
  `varosId` int(11) NOT NULL,
  `Indexkep` varchar(224) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ettermek`
--

INSERT INTO `ettermek` (`Id`, `Cim`, `ChainId`, `varosId`, `Indexkep`) VALUES
(2, 'József krt. 8', 3, 1, 'https://lh3.googleusercontent.com/p/AF1QipPo--v0GPx6WcEF30wtilnC3SriT_pJmsArFAzZ=s184-w184-h130-n-k-no'),
(3, 'Kishegyesi út 2', 3, 3, 'https://lh3.googleusercontent.com/p/AF1QipPehHPiyy1exc91j_MZ7VigDIXKfJeG8GuYQtfk=s156-w156-h108-n-k-no'),
(4, 'Soltész Nagy Kálmán u. 152', 3, 2, 'https://lh3.googleusercontent.com/p/AF1QipMa4m2zd4QtjrRT5wn8u6SfKQtaFjA05OlBRCkK=s184-w184-h144-n-k-no'),
(5, 'Baross Gábor út 23', 3, 4, 'https://lh3.googleusercontent.com/p/AF1QipP0QD6cNrHITN5gvCwnZuMURpuL_lcZUD5zSaPa=s184-w184-h144-n-k-no'),
(6, 'Jókai u. 46', 3, 7, 'https://lh3.googleusercontent.com/p/AF1QipPWMjYWIjFUV8SX2B4y5JI7EG7DonlVErwNcOjL=s184-w184-h144-n-k-no'),
(7, 'László u. 59', 3, 10, 'https://lh3.googleusercontent.com/p/AF1QipM_lhOBkKiVkcfpxYjyd7xl79POvWVP5x-RWDyN=s184-w184-h144-n-k-no'),
(8, 'Kéthly Anna u. 7', 3, 5, 'https://lh3.googleusercontent.com/p/AF1QipMbYVk04B4aZxQT5w7X3ga55eh2_n-zmNNPLKfC=s184-w184-h144-n-k-no'),
(9, 'Omszk park 1', 3, 11, 'https://lh5.googleusercontent.com/p/AF1QipMawBGqYqKBhQ8zA9gY6YUrXlaWfBCyYl9cqTL_=w650-h315-k-no'),
(10, 'Garibaldi u. 2', 3, 12, 'https://lh3.googleusercontent.com/p/AF1QipNoSTJ2LsCKL1a7cp1wysXRtAz3yqwqk_CZVu5a=s184-w184-h144-n-k-no'),
(11, 'Bossányi Krisztina utca 13', 3, 13, 'https://static.regon.hu/pe/2019/08/meki.jpg'),
(12, 'Váci u 7', 0, 1, 'https://lh3.googleusercontent.com/p/AF1QipNH6WFSxoono1y8NmPUHIPR3zFkgG57tm6NwoGF=s138-w138-h108-n-k-no'),
(13, 'Böszörményi út 24', 0, 3, 'https://lh3.googleusercontent.com/p/AF1QipMTHX3eCUi7lf6lz9fbKB4rcTFQ_4x8JwiJ7Z4A=s120-w120-h87-n-k-no'),
(14, 'Budai út 1', 0, 4, 'https://www.arkadgyor.hu/fileadmin/_processed_/c/4/csm_2023_01_24_Burger_King_04_ac3edae6c1.jpg'),
(15, 'Dunaföldvári út 2', 0, 7, 'https://kecskemet.hu/assets/cache/images/fe/fe7ecb45eab5e6b76f94c50e19c6b17f.jpg'),
(16, 'József Attila u. 87', 0, 2, 'https://lh3.googleusercontent.com/p/AF1QipNmDItCdrK17ptK-cdbucv6G3Vx4egmmQT0QR7S=s184-w184-h144-n-k-no'),
(17, 'Pazonyi út 32', 0, 10, 'https://lh3.googleusercontent.com/p/AF1QipPW_R-P0PC6ex8fF-w1GfRTIbe_LdewK1sruvhW=w600-k'),
(18, 'Sport u. 2', 0, 12, 'https://www.ittjartam.hu/profil/ugor-images/burger-king-auchan-budaors-964-1200x800.webp'),
(19, 'Határdomb út 1-3', 0, 6, 'https://i2.wp.com/cyberpress.hu/wp-content/uploads/2021/06/Burger_King_atado-5-Nagy.jpg?fit=1200%2C900&ssl=1'),
(20, 'Lackner K. u 60', 3, 6, 'https://ikvahir.eu/wp-content/uploads/2022/04/20220412_193840.jpg'),
(21, 'Ipar krt. 32', 2, 6, 'https://ikvahir.eu/wp-content/uploads/2018/10/IMG_20181008_181229-Egyedi.jpg'),
(22, 'Várkerület 108', 4, 6, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/bb/10/18/papa-joe-s-saloon-steakhouse.jpg?w=900&h=500&s=1'),
(23, 'Hajnal tér 23', 5, 6, 'https://etterem.hu/img/x/p9853n/1415026264-6370.jpg'),
(24, 'Fő tér 8', 6, 6, 'https://corvinusetterem.hu/images/microsites/1920x716/2b0c6d9e.jpg'),
(25, 'Mátyás király u. 1', 7, 6, 'https://maimoni.cafeblog.hu/files/2012/08/DSC05682.jpg'),
(26, 'Határdomb út 1-2', 8, 6, 'https://etterem.hu/img/max960/p11984n/1425302845-6304.jpg'),
(27, 'Thököly út 6', 2, 1, 'https://lh3.googleusercontent.com/p/AF1QipOtVUysO953eLLPNtUSsiRk34lxhXqlY3_Lcs2s=s138-w138-h108-n-k-no'),
(28, 'Pesti út 13', 2, 2, 'https://lh3.googleusercontent.com/p/AF1QipN6oMeRZtKqttcjT1QqkEAXrP7Dx38_4HpZh3G2=s90-w90-h72-n-k-no'),
(30, 'Kishegyesi út 1', 2, 3, 'https://lh3.googleusercontent.com/p/AF1QipPTiR13rDZPnUEkEo0DviEcllk_rsDUBu6a2FXM=s90-w90-h72-n-k-no'),
(31, 'Baross Gábor út 24', 2, 4, 'https://lh3.googleusercontent.com/p/AF1QipNHs0vguWvzY-yqHBIHCe0PJvHFe2bhQNzYMfAo=s90-w90-h72-n-k-no'),
(32, 'Izsáki út 12', 2, 7, 'https://lh3.googleusercontent.com/p/AF1QipN_kX9V9ZsBdzMbncfh5CGuS0IeFOHQAY92B_M-=s184-w184-h144-n-k-no'),
(33, 'Kert u. 47/A', 2, 10, 'https://lh3.googleusercontent.com/p/AF1QipNM8GkBv-_IPD8LbQtaLyeFUmGMY3Q5BFb2ZCq6=s220-w165-h220-n-k-no'),
(34, 'Garibaldi u. 2', 2, 12, 'https://lh3.googleusercontent.com/p/AF1QipNFvblN-gaSjDez6gFK3-Chzzoryu7P4aU4tBbG=s184-w184-h130-n-k-no'),
(35, 'Dózsa György út 136', 2, 13, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/4e/18/f1/caption.jpg?w=900&h=-1&s=1'),
(36, 'Kalászi út HRSZ 11283', 2, 14, 'https://lh5.googleusercontent.com/p/AF1QipNn_ZH-VvQR6bHzftdfa9reJrV4DO2FYzkuFRd4=w650-h486-k-no'),
(37, 'Makay István út 5', 2, 8, 'https://lh3.googleusercontent.com/p/AF1QipM14DMaMwE7HeacrzmQQqC6ZcKWeEusIum5SJMh=s90-w90-h72-n-k-no'),
(38, 'Kárász u. 16', 2, 9, 'https://lh3.googleusercontent.com/p/AF1QipPhxbWHxNvts1G17fgPGLxeB-PM5PZvtAiaLdxE=s120-w120-h87-n-k-no'),
(39, 'Zanati út 70', 2, 5, 'https://lh3.googleusercontent.com/p/AF1QipN7aRg9JGeLbgFdy_S4Rtokde0JPZb9rrw7bnOE=s184-w184-h144-n-k-no');

-- --------------------------------------------------------

--
-- Table structure for table `excludedetel`
--

CREATE TABLE `excludedetel` (
  `Id` int(11) NOT NULL,
  `EtelId` int(11) NOT NULL,
  `EtteremId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `felhasznalok`
--

CREATE TABLE `felhasznalok` (
  `Id` int(255) NOT NULL,
  `FelhasznaloNev` varchar(32) NOT NULL,
  `Email` varchar(64) NOT NULL,
  `VarosId` int(11) NOT NULL,
  `Lakcim` varchar(64) NOT NULL,
  `Hash` varchar(64) NOT NULL,
  `Salt` varchar(64) NOT NULL,
  `Jogosultsag` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `felhasznalok`
--

INSERT INTO `felhasznalok` (`Id`, `FelhasznaloNev`, `Email`, `VarosId`, `Lakcim`, `Hash`, `Salt`, `Jogosultsag`) VALUES
(1, 'Takács László', 'takacslaci@gmail.com', 1, 'Petőfi Utca 29', '', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `rendeles`
--

CREATE TABLE `rendeles` (
  `Id` int(11) NOT NULL,
  `FelhasznaloId` int(11) NOT NULL,
  `OsszAr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rendeles`
--

INSERT INTO `rendeles` (`Id`, `FelhasznaloId`, `OsszAr`) VALUES
(1, 1, 10000);

-- --------------------------------------------------------

--
-- Table structure for table `rendeltetel`
--

CREATE TABLE `rendeltetel` (
  `Id` int(11) NOT NULL,
  `EtelId` int(11) NOT NULL,
  `RendelesId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rendeltetel`
--

INSERT INTO `rendeltetel` (`Id`, `EtelId`, `RendelesId`) VALUES
(1, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `varosok`
--

CREATE TABLE `varosok` (
  `Id` int(11) NOT NULL,
  `Nev` varchar(32) NOT NULL,
  `indexKep` varchar(224) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `varosok`
--

INSERT INTO `varosok` (`Id`, `Nev`, `indexKep`) VALUES
(1, 'Budapest', 'https://a.eu.mktgcdn.com/f/100004519/5QlR-I7B4XyrnISxsKAEEu-wWKUlrRii4yA9x1-4nlc.jpg'),
(2, 'Miskolc', 'https://travelking.cdn.it7.sk/deadpool/deal-listing/468/9530-oVg5.jpg'),
(3, 'Debrecen', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Debrecen_f%C5%91t%C3%A9r_2009.jpg/1200px-Debrecen_f%C5%91t%C3%A9r_2009.jpg'),
(4, 'Győr', 'https://admissions.sze.hu/images/Photos/gyor-transformed-transformed.jpeg'),
(5, 'Szombathely', 'https://static.345.hu/varoskepek/dc5a7f270d71b419b92150459bff9ddb.jpg'),
(6, 'Sopron', 'https://upload.wikimedia.org/wikipedia/commons/5/50/Storno-h%C3%A1z_T%C5%B1ztorony_%C3%A9s_V%C3%A1rosh%C3%A1za.jpg'),
(7, 'Kecskemét', 'https://upload.wikimedia.org/wikipedia/commons/6/6b/V%C3%A1rosi_Tan%C3%A1csh%C3%A1z_%282253._sz%C3%A1m%C3%BA_m%C5%B1eml%C3%A9k%29_4.jpg'),
(8, 'Pécs', 'https://traveladdict.hu/wp-content/uploads/2021/08/IMG_9648.jpg'),
(9, 'Szeged', 'https://www.szeretlekmagyarorszag.hu/wp-content/uploads/2019/07/szeged-szegedcity-suncity-helloszeged-iloveszeged-50-1.jpg'),
(10, 'Nyíregyháza', 'https://mihalygabor-utazasai.hu/wp-content/uploads/2020/10/IMG_2023-07-25-093029-1024x768.jpeg'),
(11, 'Budakalász', 'https://www.pilisinfo.hu/imagebase/4a14a444/11062358_784192214983981_3585371202711634487_n.jpg'),
(12, 'Budaörs', 'https://i.szalas.hu/pois/8325/500x500/28268.jpg'),
(13, 'Gödöllő', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Schloss_G%C3%B6d%C3%B6ll%C5%91_Ungarn.jpg/1200px-Schloss_G%C3%B6d%C3%B6ll%C5%91_Ungarn.jpg'),
(14, 'Szentendre', 'https://felfedezok.hu/wp-content/uploads/2023/05/city-g58e10c678_1280-e1685002574358.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chain`
--
ALTER TABLE `chain`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Nev` (`Nev`);

--
-- Indexes for table `ertekelesek`
--
ALTER TABLE `ertekelesek`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `FelhasznaloId` (`FelhasznaloId`,`EtteremId`);

--
-- Indexes for table `etelek`
--
ALTER TABLE `etelek`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `nev` (`nev`),
  ADD KEY `etteremId` (`ChainId`);

--
-- Indexes for table `ettermek`
--
ALTER TABLE `ettermek`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `varosId` (`varosId`),
  ADD KEY `ChainId` (`ChainId`);

--
-- Indexes for table `excludedetel`
--
ALTER TABLE `excludedetel`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `EtelId` (`EtelId`,`EtteremId`),
  ADD KEY `EtteremId` (`EtteremId`);

--
-- Indexes for table `felhasznalok`
--
ALTER TABLE `felhasznalok`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD KEY `VarosId` (`VarosId`);

--
-- Indexes for table `rendeles`
--
ALTER TABLE `rendeles`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `FelhasznaloId` (`FelhasznaloId`);

--
-- Indexes for table `rendeltetel`
--
ALTER TABLE `rendeltetel`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `EtelId` (`EtelId`,`RendelesId`),
  ADD KEY `RendelesId` (`RendelesId`);

--
-- Indexes for table `varosok`
--
ALTER TABLE `varosok`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chain`
--
ALTER TABLE `chain`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `ertekelesek`
--
ALTER TABLE `ertekelesek`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `etelek`
--
ALTER TABLE `etelek`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `ettermek`
--
ALTER TABLE `ettermek`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `excludedetel`
--
ALTER TABLE `excludedetel`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `rendeles`
--
ALTER TABLE `rendeles`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `rendeltetel`
--
ALTER TABLE `rendeltetel`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `varosok`
--
ALTER TABLE `varosok`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `etelek`
--
ALTER TABLE `etelek`
  ADD CONSTRAINT `etelek_ibfk_1` FOREIGN KEY (`ChainId`) REFERENCES `chain` (`Id`);

--
-- Constraints for table `ettermek`
--
ALTER TABLE `ettermek`
  ADD CONSTRAINT `ettermek_ibfk_1` FOREIGN KEY (`varosId`) REFERENCES `varosok` (`Id`),
  ADD CONSTRAINT `ettermek_ibfk_2` FOREIGN KEY (`ChainId`) REFERENCES `chain` (`Id`);

--
-- Constraints for table `excludedetel`
--
ALTER TABLE `excludedetel`
  ADD CONSTRAINT `excludedetel_ibfk_1` FOREIGN KEY (`EtteremId`) REFERENCES `ettermek` (`Id`),
  ADD CONSTRAINT `excludedetel_ibfk_2` FOREIGN KEY (`EtelId`) REFERENCES `etelek` (`Id`);

--
-- Constraints for table `felhasznalok`
--
ALTER TABLE `felhasznalok`
  ADD CONSTRAINT `felhasznalok_ibfk_1` FOREIGN KEY (`VarosId`) REFERENCES `varosok` (`Id`);

--
-- Constraints for table `rendeles`
--
ALTER TABLE `rendeles`
  ADD CONSTRAINT `rendeles_ibfk_1` FOREIGN KEY (`FelhasznaloId`) REFERENCES `felhasznalok` (`Id`);

--
-- Constraints for table `rendeltetel`
--
ALTER TABLE `rendeltetel`
  ADD CONSTRAINT `rendeltetel_ibfk_1` FOREIGN KEY (`RendelesId`) REFERENCES `rendeles` (`Id`),
  ADD CONSTRAINT `rendeltetel_ibfk_2` FOREIGN KEY (`EtelId`) REFERENCES `etelek` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
