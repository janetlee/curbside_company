CREATE DATABASE FreshMuffinDriver;

USE FreshMuffinDriver;

DROP TABLE IF EXISTS 'driver';

CREATE TABLE driver (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  yubi_key_id VARCHAR(100) NOT NULL UNIQUE,
  user_id VARCHAR(100) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS 'route';

CREATE TABLE route (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  stops VARCHAR(100) NOT NULL,
  eta VARCHAR(100) NOT NULL,
  driver_id INT,
    INDEX driver_idx (driver_id),
    FOREIGN KEY (driver_id)
    REFERENCES driver(id)
);
