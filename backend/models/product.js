const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  // English fields
  en: {
    type: String,
    required: true
  },
  // French fields
  fr: {
    type: String,
    required: true
  },
  // Hindi fields
  hi: {
    type: String,
    required: true
  }
});

const productSchema = new mongoose.Schema({
  // Common fields
  name: {
    type: languageSchema,
    required: true
  },
  description: {
    type: languageSchema,
    required: true
  },
   createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;

