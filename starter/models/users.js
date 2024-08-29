const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
   
  },
  email: {
    type: String,
    requied: [true, 'must provide email']
  },
  password: {
    type: String,
    required: [true, 'must provide password']
  },
  data: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;
