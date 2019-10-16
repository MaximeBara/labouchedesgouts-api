CREATE TABLE entree(
	id_entree INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255),
    descr VARCHAR(255),
	prix INT
);

CREATE TABLE plat(
	id_plat INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255),
    descr VARCHAR(255),
    prix INT
);

CREATE TABLE dessert(
	id_dessert INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255),
    descr VARCHAR(255),
    prix INT
);

CREATE TABLE menu(
	id_menu INT AUTO_INCREMENT PRIMARY KEY,
    id_entree INT,
    id_plat INT,
    id_dessert INT,
    FOREIGN KEY (id_entree) REFERENCES entree (id_entree),
    FOREIGN KEY (id_plat) REFERENCES plat (id_plat),
    FOREIGN KEY (id_dessert) REFERENCES dessert (id_dessert)
);