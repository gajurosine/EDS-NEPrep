const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { createUserTable } = require('./model/userModel');
const { createEmployeeTable } = require('./model/employeeModel');
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const pool = require('./config/database');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Make the pool available in the request object
app.use((req, res, next) => {
  req.pool = pool;
  next();
});

//  routes
app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);

//signup 
app.post('/signup', async (req, res) => {
  // Signup  here
});

app.post('/login', async (req, res) => {
  // Login  here
});

const PORT = process.env.APP_PORT || 5000;

const initializeTables = async () => {
  await createUserTable(pool);
  await createEmployeeTable(pool);
};

initializeTables().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
