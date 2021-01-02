import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">NOTES(APP)</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">List All Notes</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create A Note</Link>
          </li>
          <li className="navbar-item">
          <Link to="/title" className="nav-link">Add/View Titles</Link>
          </li>
          <li className="navbar-item">
          <Link to="/reminder" className="nav-link">View Reminder</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}