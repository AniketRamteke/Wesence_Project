const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notesSchema = new Schema({
  note_title: { type: String, required: true },
  note_body: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Note = mongoose.model('Note', notesSchema);

module.exports = Note;