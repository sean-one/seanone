import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

// styling
import './Header.css';

class Header extends Component {

    toggleMenu = (event) => {
        console.log('click', event)
    }

    render() {
        return (
            <div className="fullHeader">
                <div className="container">
                    <div className='name'>
                        <p>Sean Ackerman</p>
                    </div>
                    <div className='bars' onClick={this.toggleMenu} >
                        <FontAwesomeIcon icon={faAlignJustify} size="3x" />
                    </div>
                    <div className='mobileMenuWrapper activeMenu'>
                        <ul className='mobileMenu'>
                            <Link to='/about'><li>About</li></Link>
                            <Link to='/work'><li>Work</li></Link>
                            <Link to='/contact'><li>Contact</li></Link>
                        </ul>
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
