import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// styling
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contactSection">
                <div className="socialLinks">
                    <div className="contactLink emailLink">
                        <a href="mailto:ackerman.seanw@gmail.com">
                            <FontAwesomeIcon icon="envelope" size="4x" />
                        </a>
                    </div>
                    <div className="contactLink linkedInLink">
                        <a href="https://www.linkedin.com/in/seanone-760" target="blank">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" />
                        </a>
                    </div>
                    <div className="contactLink githubLink">
                        <a href="https://www.github.com/sean-one">
                            <FontAwesomeIcon icon={['fab', 'github']} size="4x" />
                        </a>
                    </div>


                </div>
            </div>
        );
    }
}

export default Contact;
