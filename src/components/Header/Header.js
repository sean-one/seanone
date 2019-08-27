import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// styling
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="fullHeader">
                <div className="container">
                    <div className='name'>
                        <p>Sean Ackerman</p>
                    </div>
                    <ul className="menu">
                        <Link to='/about'><li>About</li></Link>
                        <Link to='/work'><li>Work</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
