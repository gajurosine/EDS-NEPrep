const pool = require('../config/database');

const createEmployee = async (req, res) => {
  const { firstName, lastName, nationalId, telephone, email, department, position, laptopManufacturer, model, serialNumber } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO employees (firstName, lastName, nationalId, telephone, email, department, position, laptopManufacturer, model, serialNumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [firstName, lastName, nationalId, telephone, email, department, position, laptopManufacturer, model, serialNumber]
    );
    const insertedEmployeeId = result.insertId;
    const insertedEmployee = await pool.query('SELECT * FROM employees WHERE id = ?', [insertedEmployeeId]);
    res.status(201).json(insertedEmployee[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getEmployees = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employees');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createEmployee, getEmployees };
