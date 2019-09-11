import React, { Component } from 'react';

// styling
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formName: '',
            formEmail: '',
            formPhone: '',
            formMessage: ''
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <form className='contactForm'>
                <p>Name:</p>
                <input className='formInput' type='text' placeholder='John Doe' name='formName' value={this.state.formName} onChange={this.changeHandler} /><br />
                <p>Email:</p>
                <input className='formInput' type='text' placeholder='name@email.com' name='formEmail' value={this.state.formEmail} onChange={this.changeHandler} /><br />
                <p>Phone:</p>
                <input className='formInput' type='text' placeholder='555-555-5555' name='formPhone' value={this.state.formPhone} onChange={this.changeHandler} /><br />
                <p>Message:</p>
                <textarea className='formInput' name='formMessage' placeholder='Tell us a little about what you are looking for...' rows='10' cols='30' value={this.state.formMessage} onChange={this.changeHandler} /><br />
                <input className='formButton' type="submit" value="Submit" /><br />
            </form>
        );
    }
}

export default Form;