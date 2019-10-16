const express = require('express');
const router = express.Router();
const connection = require('../db/database');

router.get("/once", (req, res, next) => {
    connection.query('CREATE TABLE entree(id_entree INT AUTO_INCREMENT PRIMARY KEY,nom VARCHAR(255),descr VARCHAR(255),prix INT);');
    connection.query('CREATE TABLE plat(id_plat INT AUTO_INCREMENT PRIMARY KEY,nom VARCHAR(255),descr VARCHAR(255),prix INT);');
    connection.query('CREATE TABLE dessert(id_dessert INT AUTO_INCREMENT PRIMARY KEY,nom VARCHAR(255),descr VARCHAR(255),prix INT);');
    connection.query('CREATE TABLE menu(id_menu INT AUTO_INCREMENT PRIMARY KEY,id_entree INT,id_plat INT,id_dessert INT,FOREIGN KEY (id_entree) REFERENCES entree (id_entree),FOREIGN KEY (id_plat) REFERENCES plat (id_plat),FOREIGN KEY (id_dessert) REFERENCES dessert (id_dessert));');
    connection.query("INSERT INTO `entree` VALUES (1,'Salade de chèvre chaud','Parce qu\'il faut bien la cramer la biquette',5),(2,'Tartare de saumon et d’avocat','Avec un avocat puisqu\'il a été pris en excés de vitesse dans la Deule',5),(3,'Aumônière de foie gras','Gras mais pas trop quand même',5),(4,'Carpaccio de Saint Jacques aux truffes','Concocté par Jacques lui-même',5),(5,'Escargots à l’ail gratinés','Vous y trouverez quelques limaces par manque de fonds',5),(6,'Macédoine','Provenant de Skopje',10);");
    connection.query("INSERT INTO `plat` VALUES (1,'Steak tartare','Parce que un steak tout court c\'est trop bon donc autant le gacher',5),(2,'Raclette','Avec un peu de Javel',5),(3,'Pizza façon Anthony','Tout est dit',5),(4,'Navarin de mouton','Parce que dire ragoût dégoûte',5),(5,'Gratin dauphinois','Un plat qui va vous satisfaire',5);");
    connection.query("INSERT INTO `dessert` VALUES (1,'Parfait à la fraise','Pas si parfait que ça',5),(2,'Clafouti au nutella','De l\'huile de palme encore et encore',6),(3,'Crumble aux pommes','Parce que les pommes c\'est la vie',7),(4,'Crèpe','Une crèpe, nature biensûr',8),(5,'Glace 2 boules','Parce que les glaces 2 boules sont les meilleures',9);");
    connection.query("INSERT INTO `menu` VALUES (1,1,1,1),(2,2,2,2),(3,3,3,3),(4,4,4,4),(5,5,5,5);");
    res.send('OK');
});

router.get("/menu", (req, res, next) => {
    if(req.query.asc != undefined){
        connection.query(
            'SELECT entree.nom AS nom_entree, plat.nom AS nom_plat, dessert.nom AS nom_dessert, entree.prix + plat.prix + dessert.prix as prix_menu'
            + ' FROM menu, entree, plat, dessert'
            + ' WHERE menu.id_entree=entree.id_entree AND menu.id_plat=plat.id_plat AND menu.id_dessert=dessert.id_dessert'
            + ' ORDER BY prix_menu ASC',
            function (err, results, fields) {
                if (err) console.log('Error GET (?asc) : ', err);
                res.send(results);
            }
        );   
    }else{
        connection.query(
            'SELECT entree.id_entree AS id_entree, entree.nom AS nom_entree, entree.prix AS prix_entree, plat.id_plat AS id_plat, plat.nom AS nom_plat, plat.prix AS prix_plat, dessert.id_dessert AS id_dessert, dessert.nom AS nom_dessert, dessert.prix AS prix_dessert'
            + ' FROM menu, entree, plat, dessert'
            + ' WHERE menu.id_entree=entree.id_entree AND menu.id_plat=plat.id_plat AND menu.id_dessert=dessert.id_dessert',
            function (err, results, fields) {
                if (err) console.log('Error GET : ', err);
                res.send(results);
            }
        );
    }
});

router.post("/menu", (req, res, next) => {
    connection.query(
        "INSERT INTO menu (id_entree, id_plat, id_dessert) VALUES (?,?,?)",
        [req.body.id_entree, req.body.id_plat, req.body.id_dessert],
        function (err, results, fields) {
            if (err) console.log('Error POST : ', err);
            res.send(results);
        }
    );
});

router.put("/menu/:id", (req, res, next) => {
    connection.query(
        "UPDATE menu SET id_entree=?, id_plat=?, id_dessert=? WHERE id_menu=?",
        [req.body.id_entree, req.body.id_plat, req.body.id_dessert, req.params.id],
        function (err, results, fields) {
            if (err) console.log('Error PUT : ', err);
            res.send(results);
        }
    );
});

router.delete("/menu/:id", (req, res, next) => {
    connection.query(
        "DELETE FROM menu WHERE id_menu = ?",
        [req.params.id],
        function (err, results, fields) {
            if (err) console.log('Error DELETE : ', err);
            res.send(results);
        }
    );
});

module.exports = router;