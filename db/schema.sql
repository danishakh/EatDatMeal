### Schema
DROP DATABASE IF EXISTS meals_db;

CREATE DATABASE meals_db;
USE meals_db;

CREATE TABLE appetizers
(
	id int NOT NULL AUTO_INCREMENT,
	appetizer_name varchar(255) NOT NULL,
	devoured boolean DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE entrees
(
	id int NOT NULL AUTO_INCREMENT,
	entree_name varchar(255) NOT NULL,
	devoured boolean DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE desserts
(
	id int NOT NULL AUTO_INCREMENT,
	dessert_name varchar(255) NOT NULL,
	devoured boolean DEFAULT false,
	PRIMARY KEY (id)
);