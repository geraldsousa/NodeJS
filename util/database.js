const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'nodejs',
  database: 'nodeJS',
  password: 'S0uthCar0l1naSC!'
});

module.exports = pool.promise();