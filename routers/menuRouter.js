const express = require('express');
const router = express.Router();
const connection = require('../db/database');

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