const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

router.get('/food', async (req, res) => {
  try {
    const foodItems = await MenuItem.find({ type: 'food' });
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/drink', async (req, res) => {
  try {
    const drinkItems = await MenuItem.find({ type: 'drink' });
    res.json(drinkItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;