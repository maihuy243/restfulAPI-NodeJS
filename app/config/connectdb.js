require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.NAME_DB,
  port: process.env.PORT_DB,
});

connection.connect((err) => {
  if (err) {
    console.log('Connect Database Faild !');
  } else {
    console.log('Connected Database !');
  }
});

module.exports = connection;
