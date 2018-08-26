const mongoose = require('mongoose');

// department Schema
const DepartmentSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  desc:{
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
  }

});

const Department = module.exports = mongoose.model('Department', DepartmentSchema);