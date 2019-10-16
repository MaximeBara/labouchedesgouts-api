const express = require('express');
const router = express.Router();
const connection = require('../db/database');

router.get("/", (req, res, next) => {
    connection.query(
        'SELECT * FROM dessert',
        function (err, results, fields) {
            let data = results;
            res.send(data);    
        }
    );
});

module.exports = router;