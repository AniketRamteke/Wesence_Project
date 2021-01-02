import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "./components/navbar.component"
import NotesList from "./components/notes-list.component.js";
import EditNote from "./components/edit-note.component";
import CreateNote from "./components/create-note.component";
import CreateTitle from "./components/create-title.component";
import CreateReminder from "./components/create-reminder.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={NotesList} />
      <Route path="/edit/:id" component={EditNote} />
      <Route path="/create" component={CreateNote} />
      <Route path="/title" component={CreateTitle} />
      <Route path="/reminder" component={CreateReminder} />
      </div>
    </Router>
  );
}

export default App;
