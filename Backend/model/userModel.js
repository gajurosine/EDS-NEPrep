const createUserTable = async (pool) => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      role ENUM('ADMIN', 'STANDARD') NOT NULL,  -- Enforce valid roles
      email VARCHAR(255) NOT NULL UNIQUE,       -- Enforce unique email addresses
      password VARCHAR(255) NOT NULL
    );
  `;

  try {
    await pool.query(query);
    console.log("User table created or already exists.");
  } catch (err) {
    // Handle specific errors for table creation failures
    if (err.code === 'ER_DUP_FIELDNAME') {
      console.error('Duplicate column name detected in table creation.');
    } else if (err.code === 'ER_TABLE_EXISTS_ERROR') {
      console.error('User table already exists.'); // Informative message
    } else {
      console.error('Error creating user table:', err); // Generic error handling
    }
  }
};

module.exports = { createUserTable };
