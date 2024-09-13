const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  type: String // 'food' or 'drink'
});

module.exports = mongoose.model('MenuItem', menuItemSchema, 'Menu_Items');