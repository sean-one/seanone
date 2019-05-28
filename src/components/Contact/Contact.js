import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// styling
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contactSection">
                <div className="socialLinks">
                        <a href="mailto:ackerman.seanw@gmail.com" target="blank">
                            <div className="contactLink emailLink">
                                <FontAwesomeIcon icon="envelope" size="4x" />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/seanone-760" target="blank">
                            <div className="contactLink linkedInLink">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" />
                            </div>
                        </a>
                        <a href="https://www.github.com/sean-one" target="blank">
                            <div className="contactLink githubLink">
                                <FontAwesomeIcon icon={['fab', 'github']} size="4x" />
                            </div>
                        </a>


                </div>
            </div>
        );
    }
}

export default Contact;
