import React, { Component } from 'react';

// images
import Profile from '../../images/profileSq.png';

// components
import Social from './Social/Social';

// styling
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="aboutContainer">
                    <div className='title'>
                        <h3>Web Developer | California, USA</h3>
                    </div>
                    <div className="aboutMe">
                        <img src={Profile} alt="SeanOne profile" />
                        <p>My name is Sean Ackerman and I am a Web Developer. Originally from Washington state, I have lived in the Coachella Valley for almost 20 years.  Spending much of the last 15 years working in the Marketing department of the largest radio cluster as the Promotions Director.  I recently completed the Full-Stack Web Development program at Lambda School. Through this immersive program I became proficient in Javascript, HTML, CSS, Node, React, Python, Express, and SQL.  My goal is to combine my previous work in marketing and promotions, with my new found passion for web development, to push your brand and or your business to the next level.</p>
                    </div>
                </div>
                <Social />
            </div>
        );
    }
}

export default About;
