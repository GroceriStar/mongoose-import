const mongoose = require('mongoose');

// groceries Schema
const GrocerySchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  img:{
    type: Boolean,
    required: true
  },
  desc:{
    type: Boolean,
    required: true
  },
  slug:{
    type: Boolean,
    required: true
  }, 
  update_at:{
    type: Data,
    required: true
  },
  create_at:{
    type: Data,
    required: true
  },
  id_1:{
    type: Number,
    required: true
  },
  favs:{
    type: Map,
    of: String,
    required: true
  },
});

const Grocery = module.exports = mongoose.model('Grocery', GrocerySchema);