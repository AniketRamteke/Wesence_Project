const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const remindersSchema = new Schema({
  reminder: {
    type: Number,
    required: true,
    unique: true,
  },
}, {
  timestamps: true,
});

const Reminder = mongoose.model('Reminder', remindersSchema);

module.exports = Reminder;