const express = require('express');
const router = express.Router();
const connection = require('../db/database');

router.get("/entree", (req, res, next) => {
    if (req.query.nom != undefined) {
        connection.query(
            "SELECT * FROM entree WHERE nom LIKE '%" + req.query.nom + "%'",
            function (err, results, fields) {
                if (err) console.log('Error GET (?nom=) : ', err);
                res.send(results);
            }
        );
    } else {
        connection.query(
            'SELECT * FROM entree',
            function (err, results, fields) {
                if (err) console.log('Error GET : ', err);
                res.send(results);
            }
        );
    }
});

router.post("/entree", (req, res, next) => {
    connection.query(
        "INSERT INTO entree (nom, descr, prix) VALUES (?,?,?)",
        [req.body.nom, req.body.descr, req.body.prix],
        function (err, results, fields) {
            if (err) console.log('Error POST : ', err);
            res.send(results);
        }
    );
});

router.put("/entree/:id", (req, res, next) => {
    connection.query(
        "UPDATE entree SET nom=?, descr=?, prix=? WHERE prix=?",
        [req.body.nom, req.body.descr, req.body.prix, req.params.id],
        function (err, results, fields) {
            if (err) console.log('Error PUT : ', err);
            res.send(results);
        }
    );
});

router.delete("/entree/:id", (req, res, next) => {
    connection.query(
        "DELETE FROM entree WHERE id_entree = ?",
        [req.params.id],
        function (err, results, fields) {
            if (err) console.log('Error DELETE : ', err);
            res.send(results);
        }
    );
});

module.exports = router;