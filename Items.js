const mongoose = require('mongoose');

// groceries Schema
const ItemSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  qualitity:{
    type: Number,
    required: true
  },
  purchase:{
    type: Number,
    required: true
  }
});

const Item = module.exports = mongoose.model('Item', ItemSchema);