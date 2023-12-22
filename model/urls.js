const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema({
  urlID: {
    type: String,
    require: true,
    unique: true
  },
  originalURL: {
    type: String,
    require: true
  },
  history: [{ timestemps: { type: Number } }]
}, { timestamps: true })
module.exports = mongoose.model('url', urlSchema)