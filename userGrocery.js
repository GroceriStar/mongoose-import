const mongoose = require('mongoose');

// User Schema
const UserGrocerySchema = mongoose.Schema({
    userid:{
        type: Number,
        required: true
    } 
});

const UserGrocery = module.exports = mongoose.model('UserGrocery', UserGrocerySchema);