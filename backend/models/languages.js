const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  lang_name: {
    type: String,
    required:true
  },
  lang_value: {
    type: String,
    required:true
  }, createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Languages', languageSchema);
