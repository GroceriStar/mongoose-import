const mongoose = require('mongoose');

// User Schema
const UserCredentialSchema = mongoose.Schema({
    userid:{
        type: Number,
        required: true
    } 
});

const UserCredential = module.exports = mongoose.model('UserCredential', UserCredentialSchema);