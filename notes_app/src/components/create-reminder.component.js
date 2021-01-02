import React, { Component } from 'react';
import axios from "axios";

export default class CreateReminder extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeReminder = this.onChangeReminder.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          reminder: '',
        }
    }
    onChangeReminder(e) {
        this.setState({
          reminder : e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();//nullifies the effect of the normal submit button of HTML
    
        const reminder = {
          reminder: this.state.reminder,
        }
    
        console.log(reminder);

        axios.post('http://localhost:5000/reminders/add', reminder)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.response)
            });
            
        //After inputing the reminder it clears the reminder field for another input
        this.setState({
            reminder:' '
        })
    }
    render() {
        return(
        <div>
            <h3>Add/View Reminder</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Reminders: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.reminder}
                    onChange={this.onChangeReminder}
                    />
            </div>
            <div className="form-group">
                <input type="submit" value="Add Remider" className="btn btn-success" />
            </div>
            </form>
      </div>
        )
    }
}