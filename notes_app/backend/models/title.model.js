const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const titlesSchema = new Schema({
  title: { type: String, required: true },
}, {
  timestamps: true,
});

const Title = mongoose.model('Title', titlesSchema);

module.exports = Title;