-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 24 Mai 2018 à 17:27
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ibaby`
--

-- --------------------------------------------------------

--
-- Structure de la table `archive`
--

CREATE TABLE `archive` (
  `id` int(11) NOT NULL,
  `createdAt` bigint(20) DEFAULT NULL,
  `fromModel` varchar(255) DEFAULT NULL,
  `originalRecord` longtext,
  `originalRecordId` longtext
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `babyfoot`
--

CREATE TABLE `babyfoot` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `place` varchar(255) DEFAULT NULL,
  `maxPlayers` double DEFAULT NULL,
  `available` tinyint(1) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `babyfoot`
--

INSERT INTO `babyfoot` (`createdAt`, `updatedAt`, `id`, `place`, `maxPlayers`, `available`) VALUES
(1524142301059, 1527180645072, 1, '"Bar de la Joconde"', 4, 0),
(1524142325696, 1527180835929, 2, 'BordeauxCentre', 4, 1),
(1524142337431, 1527182232068, 3, 'Place Baccalan', 4, 1);

-- --------------------------------------------------------

--
-- Structure de la table `booking`
--

CREATE TABLE `booking` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `date` double DEFAULT NULL,
  `hour` double DEFAULT NULL,
  `players` double DEFAULT NULL,
  `babyfoot` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `booking`
--

INSERT INTO `booking` (`createdAt`, `updatedAt`, `id`, `date`, `hour`, `players`, `babyfoot`, `owner`) VALUES
(1527172530151, 1527172530151, 1, 1527285600000, 17, 2, 1, 1),
(1527172583831, 1527172583831, 2, 1527285600000, 17, 2, 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `match`
--

CREATE TABLE `match` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `duration` double DEFAULT NULL,
  `isPlayed` tinyint(1) DEFAULT NULL,
  `isInProgress` tinyint(1) DEFAULT NULL,
  `redScore` double DEFAULT NULL,
  `blueScore` double DEFAULT NULL,
  `babyfoot` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `pseudo` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `message`
--

INSERT INTO `message` (`createdAt`, `updatedAt`, `id`, `message`, `pseudo`) VALUES
(1524747003942, 1524747003942, 5, 'testVotre message ici...', 'Test');

-- --------------------------------------------------------

--
-- Structure de la table `team`
--

CREATE TABLE `team` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `team`
--

INSERT INTO `team` (`createdAt`, `updatedAt`, `id`, `name`, `owner`) VALUES
(1522938670540, 1527151589123, 1, 'First Team', 1),
(1524142089740, 1527151975011, 2, 'MySuperTeam', 2),
(1524230753278, 1527151514223, 3, 'TeamAvatar', 3);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `birthdate` double DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `team` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`createdAt`, `updatedAt`, `id`, `email`, `lastname`, `firstname`, `birthdate`, `gender`, `password`, `team`) VALUES
(1524730342471, 1527151589138, 1, 'toph@melonlord.com', 'of the Earth kingdom', 'Toph', 0, '', 'iammelonlord', 1),
(1524730381991, 1527151975029, 2, 'katara@watertribe.com', 'Watertribe', 'Katara', 0, '', 'watertribe!', 2),
(1524730408332, 1527151975029, 3, 'aang@airnomad.com', 'Airnomad', 'Aang', 0, '', 'keepcoolandbreath', 2),
(1524821578848, 1527151975029, 4, 'lorem@ipsum.com', 'Ipsum', 'Lorem', 0, '', '$2a$10$PzECke4ZZHYyqWgxRzOMze/RAUmxOrFhWgfwPu/0EQD5NeVWuJReK', 2),
(1524823144129, 1527151975029, 5, 'test@example.com', 'Test', 'Test', 0, '', '$2a$10$S0fTU2zjr8xLuoN/c53.feVlod8kTasIGM.2xlAC.ZPM/gPu9hPh6', 2),
(1527167555184, 1527167555184, 6, 'thisisatest@test.com', 'MyTest', 'MyTest3', 0, '', '$2a$10$tFA1I/wtMDidgmRUBLc.pe.sqN34k6.To/8adFWYQ06ReEOX1rk26', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `usermatch`
--

CREATE TABLE `usermatch` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `match` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `archive`
--
ALTER TABLE `archive`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `babyfoot`
--
ALTER TABLE `babyfoot`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `match`
--
ALTER TABLE `match`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `usermatch`
--
ALTER TABLE `usermatch`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `archive`
--
ALTER TABLE `archive`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `babyfoot`
--
ALTER TABLE `babyfoot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `match`
--
ALTER TABLE `match`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `usermatch`
--
ALTER TABLE `usermatch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
