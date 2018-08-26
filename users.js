const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
  favs:{
    type: Map,
    of: String,
    required: true
  },
  ingredient_id:{
    type: Number,
    required: true
  },
  grocery_id:{
    type: Number,
    required: true
  },
 
});

const User = module.exports = mongoose.model('User', UserSchema);