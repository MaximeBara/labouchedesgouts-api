const mysql = require ('mysql2');

const connection = mysql.createConnection({
    host: 'mysql://bdcd523354ee7e:3b30ca3b@eu-cdbr-west-02.cleardb.net',
    user: 'bdcd523354ee7e',
    password: '3b30ca3b',
    database: 'heroku_764dbbebfa2d34e'
});

module.exports = connection;