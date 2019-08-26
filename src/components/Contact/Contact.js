import React, { Component } from 'react';

// components
import Form from './Form/Form';

// styling
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contactSection">
                <div className='contactText'>
                    <h2>Lets build something!</h2>
                    <p>Do you have an app idea or a business that needs a website.  Contact me via the form or give me a call at (760) 262-4108.</p>
                </div>
                <div className='contactWrapper'>
                    <Form />
                </div>
            </div>
        );
    }
}

export default Contact;
