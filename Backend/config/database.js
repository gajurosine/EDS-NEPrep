const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

// Configure MySQL connection details using environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DATABASE || 'restful',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: false // SSL not required for local development
});

// Example query function to demonstrate usage
const exampleQuery = async () => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM employees');
    console.log(rows); // This will contain the query results
  } catch (err) {
    console.error(err);
  }
};

// Call the example query function
exampleQuery();

module.exports = pool;
