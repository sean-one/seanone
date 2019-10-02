import React, { Component } from 'react';
// import { API } from 'aws-amplify';

// components
import Form from './Form/ContactForm';

// styling
import './Contact.css';

class Contact extends Component {
    // state = { people: [] }
    // async componentDidMount() {
    //     const data = await API.get('portfolioAPI', '/makecontact')
    //     this.setState({ people: data.people })
    // }
    render() {
        return (
            <div className="contactSection">
                <div className='contactText'>
                    <h2>Lets build something!</h2>
                    <p>Do you have an app idea or a business that needs a website.  Contact me via the form or give me a call at (760) 262-4108.</p>
                    {/* {
                        this.state.people.map((person, i) => (
                            <div>
                                <h4>{ person.name }</h4>
                                <p>{ person.emotion }</p>
                            </div>
                        ))
                    } */}
                </div>
                <div className='contactWrapper'>
                    <Form />
                </div>
            </div>
        );
    }
}

export default Contact;
