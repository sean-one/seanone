import React, { Component } from 'react';

// styling
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="headerSection">
                <ul className="menu">
                    <li>About</li>
                    <li>Work</li>
                    <li>Resume</li>
                </ul>
            </div>
        );
    }
}

export default Header;
