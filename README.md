On the server these files live under `/var/www/html` (`public/` contents at the web root, `api/` as `LAMPAPI/`).

## High-level setup

1. Create a DigitalOcean Droplet from the LAMP 1-Click image.
2. Point a domain A record at the droplet IPv4 address.
3. Create a MySQL database named `COP4331` with `Users` and `Colors` tables.
4. Create a MySQL user that can access only that database. Put those credentials in `api/database.php` on the server only (copy from `api/database.example.php`). Never commit `database.php`.
5. Copy `public/` files to `/var/www/html` and PHP files to `/var/www/html/LAMPAPI`.
6. In `public/js/code.js`, set `urlBase` to `http://YOUR_DOMAIN/LAMPAPI`.

### Example tables

```sql
CREATE DATABASE COP4331;
USE COP4331;

CREATE TABLE Users (
  ID INT NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(50) NOT NULL DEFAULT '',
  LastName VARCHAR(50) NOT NULL DEFAULT '',
  Login VARCHAR(50) NOT NULL DEFAULT '',
  Password VARCHAR(50) NOT NULL DEFAULT '',
  PRIMARY KEY (ID)
) ENGINE=InnoDB;

CREATE TABLE Colors (
  ID INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(50) NOT NULL DEFAULT '',
  UserID INT NOT NULL DEFAULT '0',
  PRIMARY KEY (ID)
) ENGINE=InnoDB;