import React, { Component } from 'react';
import axios from "axios";

export default class CreateTitle extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeNote_Title = this.onChangeNote_Title.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          note_title: '',
        }
    }
    onChangeNote_Title(e) {
        this.setState({
          note_title : e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();//nullifies the effect of the normal submit button of HTML
    
        const title = {
          title: this.state.note_title,
        }
    
        console.log(title);

        axios.post('http://localhost:5000/titles/add', title)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.response)
            });
        //After inputing the title it clears the title field for another input
        this.setState({
            title:''
        })
    }
    render() {
        return(
        <div>
            <h3>Add/View Title</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Title: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.note_title}
                    onChange={this.onChangeNote_Title}
                    />
            </div>
            <div className="form-group">
                <input type="submit" value="Add Title" className="btn btn-primary" />
            </div>
            </form>
      </div>
        )
    }
}