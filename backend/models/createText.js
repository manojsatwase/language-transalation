const mongoose = require('mongoose');

const langaugeSchema = new mongoose.Schema({
  name:{
    type:"string",
    required:true,
  },
 description:{
    type:"string",
    required:true,
 },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const language = mongoose.model('Language',langaugeSchema);
module.exports = language;

