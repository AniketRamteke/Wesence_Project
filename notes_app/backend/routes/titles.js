const router = require('express').Router();
let Title = require('../models/title.model');

router.route('/').get((req, res) => {
  Title.find()
    .then(titles => res.json(titles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;

  const newTitle = new Title({title});

  newTitle.save()
    .then(() => res.json('Title added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;