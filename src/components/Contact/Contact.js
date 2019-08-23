import React, { Component } from 'react';

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
                <div className='contactForm'>
                    <form>
                        <label>
                            Name:<br/>
                            <input type='text' name='name' /><br />
                        </label>
                        <label>
                            Email:<br />
                            <input type='text' name='email' /><br />
                        </label>
                        <label>
                            Phone:<br />
                            <input type='text' name='phone' /><br />
                        </label>
                        <label>
                            Message:<br />
                            <textarea name='message' rows='10' cols='30' /><br />
                        </label>
                        <input type="submit" value="Submit" /><br />
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
