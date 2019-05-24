import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// styling
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contactSection">
                <div className="socialLinks">
                    <div className="emailLink">
                        <FontAwesomeIcon icon="envelope" size="4x" />
                    </div>
                    <div className="linkedInLink">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" />
                    </div>
                    <div className="githubLink">
                        <FontAwesomeIcon icon={['fab', 'github']} size="4x" />
                    </div>


                </div>
            </div>
        );
    }
}

export default Contact;
