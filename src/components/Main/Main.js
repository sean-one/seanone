import React, { Component } from 'react';

// images
import Profile from '../../images/profileSq.png';

// styling
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="mainBody">
                <h1>Sean Flannigan</h1>
                <div className="aboutContainer">
                    <h3>Web Developer | California, USA</h3>
                    <div className="aboutMe">
                        <img src={Profile} alt="SeanOne profile" />
                        <p>My name is Sean Flannigan and I am a Web Developer.  I have recently completed the online bootcamp, Lambda School.  I am focused on combining my last 15 years of marketing and promotions, with my new found passion for web development</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
