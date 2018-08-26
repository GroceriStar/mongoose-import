const mongoose = require('mongoose');

// User Schema
const UserFavSchema = mongoose.Schema({
    ingredient_id:{
        type: Number,
        required: true
    },
    userid:{
        type: Number,
        required: true
    },
    favs:{
        type: Map,
        of: String,
        required: true
    },
    grocery_id:{
        type: Number,
        required: true
    }
 
});

const UserFav = module.exports = mongoose.model('UserFav', UserFavSchema);