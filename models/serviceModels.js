const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  type: { type: String, required: true },
  code: { type: String, required: true },
  description: String,
  imgUrl: String,
  detail: [String],
});

module.exports = mongoose.model('Service', serviceSchema);
