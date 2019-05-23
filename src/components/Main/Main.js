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
                <div className="aboutMe">
                    <img src={Profile} alt="SeanOne profile" />
                </div>
            </div>
        );
    }
}

export default Main;
