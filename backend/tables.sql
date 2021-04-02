CREATE DATABASE `db_groupomania`;

USE `db_groupomania`;

CREATE TABLE `users`
(
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `pseudo`VARCHAR(50) NOT NULL UNIQUE,
    `lastname` VARCHAR(50) NOT NULL,
    `firstname` VARCHAR(50) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `bio` TEXT,
    `likes` VARCHAR(255),
    `picture` VARCHAR(255),
    `isAdmin` BOOLEAN DEFAULT FALSE,

    PRIMARY KEY(`id`)
)
    ENGINE=INNODB DEFAULT CHARSET=utf8;

CREATE TABLE `posts`
(
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` SMALLINT UNSIGNED NOT NULL,
    `date` DATETIME NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` TEXT,
    `attachment` VARCHAR(255),

    PRIMARY KEY(`id`),
    CONSTRAINT `fk_posts_userId` FOREIGN KEY(`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE
)
    ENGINE=INNODB DEFAULT CHARSET=utf8;