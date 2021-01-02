const router = require('express').Router();
let Note = require('../models/note.model');

router.route('/').get((req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const note_title = req.body.note_title;
  const note_body = req.body.note_body;
  const date = Date.parse(req.body.date);

  const newNote = new Note({
    note_title,
    note_body,
    date,
  });

  newNote.save()
  .then(() => res.json(`A note with title '${newNote.note_title}' has been added!`))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Note.findById(req.params.id)
    .then(note => res.json(note))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json('Note has been deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Note.findById(req.params.id)
    .then(note => {
      note.note_title = req.body.note_title;
      note.note_body = req.body.note_body;
      note.date = Date.parse(req.body.date);

      note.save()
        .then(() => res.json('Note with a title updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;