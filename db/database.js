const mysql = require ('mysql2');

const connection = mysql.createConnection({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b99a005133c9fb',
    password: '242cb621',
    database: 'heroku_d83f62009e365ad'
});

module.exports = connection;