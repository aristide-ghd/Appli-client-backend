const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');
const customers = require('./routes/customersRoutes.js');

require('dotenv').config();

// Connect to database
connectDB();


// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.use('/api/customers', customers);

// Port d'ecoute
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
