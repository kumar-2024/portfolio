// db.js
// TiDB Cloud connection (MySQL-compatible protocol -> mysql2 se connect hota hai)
const mysql = require('mysql2/promise');
const fs = require('fs');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 4000,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    // TiDB Cloud SSL certificate ke liye
    // agar aapke paas CA cert file hai to uska path do, warna neeche wali line use karein
    rejectUnauthorized: true
  }
});

module.exports = pool;
