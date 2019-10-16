const express = require('express');
const router = express.Router();
const connection = require('../db/database');

router.get("/plat", (req, res, next) => {
    if (req.query.nom != undefined) {
        connection.query(
            "SELECT * FROM plat WHERE nom LIKE '%" + req.query.nom + "%'",
            function (err, results, fields) {
                if (err) console.log('Error GET (?nom=) : ', err);
                res.send(results);
            }
        );
    } else {
        connection.query(
            'SELECT * FROM plat',
            function (err, results, fields) {
                if (err) console.log('Error GET : ', err);
                res.send(results);
            }
        );
    }
});

router.post("/plat", (req, res, next) => {
    connection.query(
        "INSERT INTO plat (nom, descr, prix) VALUES (?,?,?)",
        [req.body.nom, req.body.descr, req.body.prix],
        function (err, results, fields) {
            if (err) console.log('Error POST : ', err);
            res.send(results);
        }
    );
});

router.put("/plat/:id", (req, res, next) => {
    connection.query(
        "UPDATE plat SET nom=?, descr=?, prix=? WHERE prix=?",
        [req.body.nom, req.body.descr, req.body.prix, req.params.id],
        function (err, results, fields) {
            if (err) console.log('Error PUT : ', err);
            res.send(results);
        }
    );
});

router.delete("/plat/:id", (req, res, next) => {
    connection.query(
        "DELETE FROM plat WHERE id_plat = ?",
        [req.params.id],
        function (err, results, fields) {
            if (err) console.log('Error DELETE : ', err);
            res.send(results);
        }
    );
});

module.exports = router;