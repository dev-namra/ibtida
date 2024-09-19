const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: 'https://ibtida.netlify.app', 
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


app.use('/api/menu', require('./routes/menu'));


module.exports = app;
