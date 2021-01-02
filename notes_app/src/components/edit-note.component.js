import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditNote extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeNote_Title = this.onChangeNote_Title.bind(this);
        this.onChangeNote_Body = this.onChangeNote_Body.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          note_title: '',
          note_body: '',
          date: new Date(),
          titles: []
        }
    }
    //generates as soon as the page is loaded (lifecyclemethod)
    componentDidMount() {
    axios.get('http://localhost:5000/notes/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          note_title: response.data.note_title,
          note_body: response.data.note_body,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
        axios.get('http://localhost:5000/titles')
         .then(response =>{
             if(response.data.length > 0){
                this.setState({
                    titles: response.data.map(title => title.title)
                })
             }
         })
         .catch((error) => {
            console.log(error);
          })
    }
    onChangeNote_Title(e) {
        this.setState({
          note_title : e.target.value
        })
      }
    
      onChangeNote_Body(e) {
        this.setState({
          note_body: e.target.value
        })
      }

      onChangeDate(date) {
        this.setState({
          date: date
        })
      }
    
      onSubmit(e) {
        e.preventDefault();//nullifies the effect of the normal submit button of HTML
    
        const note = {
          note_title: this.state.note_title,
          note_body: this.state.note_body,
          date: this.state.date
        }
        console.log(note);

        axios.post('http://localhost:5000/notes/update' + this.props.match.params.id, note)
            .then(res => console.log(res.data));        
        
        window.location = '/';
      }
    render() {
        return(
            <div>
      <h3>Edit Note Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Title: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.note_title}
              onChange={this.onChangeNote_Title}>
              {
                this.state.titles.map(function(title) {
                  return <option 
                    key={title}
                    value={title}>{title}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Note_Body: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.note_body}
              onChange={this.onChangeNote_Body}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit this Note" className="btn btn-success" />
        </div>
      </form>
    </div>
        )
    }
}