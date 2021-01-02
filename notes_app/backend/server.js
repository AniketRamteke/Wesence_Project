const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const notesRouter = require('./routes/notes');
const remindersRouter = require('./routes/reminders');
const titlesRouter = require('./routes/titles');
//app.use('when visited on the follwing URL on the website','what to show, what I required above');
app.use('/notes', notesRouter);
app.use('/reminders', remindersRouter);
app.use('/titles', titlesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});