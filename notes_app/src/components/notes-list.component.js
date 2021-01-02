import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Note = props => (
    <tr>
      <td>{props.note.note_title}</td>
      <td>{props.note.note_body}</td>
      {/* <td>{props.exercise.date.substring(0,10)}</td> */}
      <td>
        <Link to={"/edit/"+props.note._id}>edit</Link> | <a href="#" onClick={() => { props.deleteNote(props.note._id) }}>delete</a>
      </td>
    </tr>
  )

export default class NotesList extends Component {
    constructor(props){
         super(props);

         this.deleteNote = this.deleteNote.bind(this);

         this.state = {notes : []}
    }
    componentDidMount(){
        axios.get('http://localhost:5000/notes')
            .then(response =>{
                this.setState({ notes: response.data})
            })
            .catch((err) => { 
                console.log(err);
            });
    }
    deleteNote(id){
        axios.delete('http://localhost:5000/notes/'+id)
            .then(res => {console.log(res.data)});
        this.setState({
            notes: this.state.notes.filter(el => el._id!== id)
        })
    }

    noteList() {
        return this.state.notes.map(currentnote => {
          return <Note note={currentnote} deleteNote={this.deleteNote} key={currentnote._id}/>;
        })
    }
    render() {
        return(
            <div>
                <h3>Logged Notes</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Note Title</th>
                    <th>Note Body</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.noteList() }
                </tbody>
                </table>
            </div>
        )
    }
}