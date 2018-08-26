const mongoose = require('mongoose');

// groceries Schema
const IngredientSchema = mongoose.Schema({
  favs:{
    type: Map,
    of: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  custom:{
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
  department_id:{
    type: Number,
    required: true
  },
});

const Ingredient = module.exports = mongoose.model('Ingredienty', IngredientSchema);