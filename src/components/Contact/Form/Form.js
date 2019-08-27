import React, { Component } from 'react';

// styling
import './Form.css';

class Form extends Component {
    render() {
        return (
            <form className='contactForm'>
                <p>Name:</p>
                <input className='formInput' type='text' placeholder='John Doe' name='name' /><br />
                <p>Email:</p>
                <input className='formInput' type='text' placeholder='name@email.com' name='email' /><br />
                <p>Phone:</p>
                <input className='formInput' type='text' placeholder='555-555-5555' name='phone' /><br />
                <p>Message:</p>
                <textarea className='formInput' name='message' placeholder='Tell us a little about what you are looking for...' rows='10' cols='30' /><br />
                <input className='formButton' type="submit" value="Submit" /><br />
            </form>
        );
    }
}

export default Form;