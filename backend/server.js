const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

// Update CORS options to allow multiple origins
const corsOptions = {
    origin: ['http://localhost:3000', 'https://ibtida.netlify.app'], // Add both local and production front-end URLs
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));  // Apply CORS with updated options
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/menu', require('./routes/menu'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
