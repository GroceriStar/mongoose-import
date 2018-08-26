const mongoose = require('mongoose');

// User Schema
const AccessSchema = mongoose.Schema({
    userid:{
        type: Number,
        required: true
    } 
});

const Access = module.exports = mongoose.model('Access', AccessSchema);