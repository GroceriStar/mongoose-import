const mongoose = require('mongoose');

// User Schema
const UserIdentitySchema = mongoose.Schema({
    userid_1:{
        type: Number,
        required: true
    } 
});

const UserIdentity = module.exports = mongoose.model('UserIdentity', UserIdentitySchema);