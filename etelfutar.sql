-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2024 at 11:10 AM
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
-- Table structure for table `etelek`
--

CREATE TABLE `etelek` (
  `nev` varchar(32) NOT NULL,
  `kaloria` int(11) NOT NULL,
  `ar` int(11) NOT NULL,
  `etteremId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `etelek`
--

INSERT INTO `etelek` (`nev`, `kaloria`, `ar`, `etteremId`) VALUES
(' Big Tasty® ', 903, 3190, 2),
('Sajtburger', 326, 750, 2),
('McChicken®', 422, 750, 2),
('Sajtburger McMoment® menü', 231, 1340, 2),
('Big Mac® McMenü® Plusz', 965, 2590, 2),
('Málnás-krémtúrós pite', 246, 790, 2);

-- --------------------------------------------------------

--
-- Table structure for table `ettermek`
--

CREATE TABLE `ettermek` (
  `Id` int(11) NOT NULL,
  `Nev` varchar(32) NOT NULL,
  `varosId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ettermek`
--

INSERT INTO `ettermek` (`Id`, `Nev`, `varosId`) VALUES
(2, 'McDonald\'s Budapest', 1),
(3, 'McDonald\'s Debrecen', 3),
(4, 'McDonald\'s Miskolc', 2),
(5, 'McDonald\'s Győr', 4),
(6, 'McDonald\'s Kecskemét', 7),
(7, 'McDonald\'s Nyíregyháza', 10),
(8, 'McDonald\'s Szombathely', 5),
(9, 'McDonald\'s Budakalász', 11),
(10, 'McDonald\'s Budaörs', 12),
(11, 'McDonald\'s Gödöllő', 13),
(12, 'Burger King Budapest', 1),
(13, 'Burger King Debrecen', 3),
(14, 'Burger King Győr', 4),
(15, 'Burger King Kecskemét', 7),
(16, 'Burger King Miskolc', 2),
(17, 'Burger King Nyíregyháza', 10),
(18, 'Burger King Budaörs', 12),
(19, 'Burger King Sopron', 6),
(20, 'McDonald\'s Sopron', 6),
(21, 'KFC Sopron', 6),
(22, 'Papa Joe Saloon & Steakhouse', 6),
(23, 'Lángos Ház', 6),
(24, 'Corvinus Étterem', 6),
(25, 'Alcatraz Ételbár', 6),
(26, 'Chen\'s Étterem', 6),
(27, 'KFC Budapest', 1),
(28, 'KFC Miskolc', 2),
(30, 'KFC Debrecen', 3),
(31, 'KFC Győr', 4),
(32, 'KFC Kecskemét', 7),
(33, 'KFC Nyíregyháza', 10),
(34, 'KFC Budaörs', 12),
(35, 'KFC Gödöllő', 13),
(36, 'KFC Szentendre', 14),
(37, 'KFC Pécs', 8),
(38, 'KFC Szeged', 9),
(39, 'KFC Szombathely', 5);

-- --------------------------------------------------------

--
-- Table structure for table `felhasznalok`
--

CREATE TABLE `felhasznalok` (
  `Id` int(255) NOT NULL,
  `FelhasznaloNev` varchar(32) NOT NULL,
  `Email` varchar(64) NOT NULL,
  `Hash` varchar(64) NOT NULL,
  `Salt` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `felhasznalok`
--

INSERT INTO `felhasznalok` (`Id`, `FelhasznaloNev`, `Email`, `Hash`, `Salt`) VALUES
(1, 'Takács László', 'takacslaci@gmail.com', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `varosok`
--

CREATE TABLE `varosok` (
  `Id` int(11) NOT NULL,
  `Nev` varchar(32) NOT NULL,
  `indexKep` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `varosok`
--

INSERT INTO `varosok` (`Id`, `Nev`, `indexKep`) VALUES
(1, 'Budapest', ''),
(2, 'Miskolc', ''),
(3, 'Debrecen', ''),
(4, 'Győr', ''),
(5, 'Szombathely', ''),
(6, 'Sopron', ''),
(7, 'Kecskemét', ''),
(8, 'Pécs', ''),
(9, 'Szeged', ''),
(10, 'Nyíregyháza', ''),
(11, 'Budakalász', ''),
(12, 'Budaörs', ''),
(13, 'Gödöllő', ''),
(14, 'Szentendre', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `etelek`
--
ALTER TABLE `etelek`
  ADD KEY `etteremId` (`etteremId`);

--
-- Indexes for table `ettermek`
--
ALTER TABLE `ettermek`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `varosId` (`varosId`);

--
-- Indexes for table `felhasznalok`
--
ALTER TABLE `felhasznalok`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `varosok`
--
ALTER TABLE `varosok`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ettermek`
--
ALTER TABLE `ettermek`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  ADD CONSTRAINT `etelek_ibfk_1` FOREIGN KEY (`etteremId`) REFERENCES `ettermek` (`Id`);

--
-- Constraints for table `ettermek`
--
ALTER TABLE `ettermek`
  ADD CONSTRAINT `ettermek_ibfk_1` FOREIGN KEY (`varosId`) REFERENCES `varosok` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
