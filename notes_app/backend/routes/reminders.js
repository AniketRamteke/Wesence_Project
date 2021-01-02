const router = require('express').Router();
let Reminder = require('../models/reminder.model');

router.route('/').get((req, res) => {
  Reminder.find()
    .then(reminders => res.json(reminders))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const reminder = req.body.reminder;

  const newReminder = new Reminder({reminder});

  newReminder.save()
    .then(() => res.json('Reminder added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;