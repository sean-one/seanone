import React, { Component } from 'react';

// styling
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="headerSection">
                <ul className="menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}

export default Header;
