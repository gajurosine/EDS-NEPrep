const pool = require('../config/database');

const createEmployeeTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS employees (
      id INT AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      nationalId VARCHAR(255) NOT NULL,
      telephone VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      department VARCHAR(255) NOT NULL,
      position VARCHAR(255) NOT NULL,
      laptopManufacturer VARCHAR(255) NOT NULL,
      model VARCHAR(255) NOT NULL,
      serialNumber VARCHAR(255) NOT NULL
    );
  `;

  try {
    await pool.query(query);
    console.log("Employee table created or already exists.");
  } catch (err) {
    console.error('Error creating employee table:', err);
  }
};

module.exports = { createEmployeeTable };
