const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Deadpool_Labs',
    password: 'Queretaro2017#'
});

module.exports = pool.promise();