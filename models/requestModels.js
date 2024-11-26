const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  mobile: { type: Number, required: true },
  email: { type: String, required: true },
  amt: Number,
  type: String,
  msg: String,
  code: String,
});

module.exports = mongoose.model('Request', requestSchema);
