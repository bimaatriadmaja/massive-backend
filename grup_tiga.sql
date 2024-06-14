-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2024 at 04:23 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grup_tiga`
--

-- --------------------------------------------------------

--
-- Table structure for table `feed`
--

CREATE TABLE `feed` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feed`
--

INSERT INTO `feed` (`id`, `name`, `image`, `url`, `caption`, `createdAt`, `updatedAt`) VALUES
(34, 'Bima Triadmaja', 'cd14eeb56f1c53891858443b3272548e.png', 'http://localhost:5000/images/cd14eeb56f1c53891858443b3272548e.png', 'Lelah', '2024-06-12 00:31:42', '2024-06-12 00:31:42'),
(35, 'Ubai Ganteng', '5f4f7bda124cd8d2342d132c93012ca0.png', 'http://localhost:5000/images/5f4f7bda124cd8d2342d132c93012ca0.png', 'raket', '2024-06-12 01:20:21', '2024-06-12 08:49:49');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email_or_hp` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `name`, `email_or_hp`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(4, 'Bima Triadmaja', '0895422615117', '94865e5d0e10cd183d42bc1fc6b1e968.jpg', 'http://localhost:5000/img/94865e5d0e10cd183d42bc1fc6b1e968.jpg', '2024-06-12 03:35:35', '2024-06-12 04:35:20'),
(6, 'Ubai', '1213234344545', '043c4264ee8994bae2f4b1932938bd8c.jpg', 'http://localhost:5000/img/043c4264ee8994bae2f4b1932938bd8c.jpg', '2024-06-12 08:56:51', '2024-06-12 08:56:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `password`, `createdAt`, `updatedAt`) VALUES
(27, 'bima12345@gmail.com', 'Bima', 'Triadmaja', '$2b$10$InC1H19eBc9CtljwzpxId.f3ofoMd3nzmWOWaQLGqcNG1e4P9w4jO', '2024-06-11 14:22:07', '2024-06-11 14:22:07'),
(29, 'zulian@gmail.com', 'Zulian', 'Aditya', '$2b$10$ETCTHEtjh91yXT4brrv0jeJa1lNxDNoReUpDeaq3B/4CWNptkVT6m', '2024-06-12 08:47:28', '2024-06-12 08:47:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `feed`
--
ALTER TABLE `feed`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feed`
--
ALTER TABLE `feed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
