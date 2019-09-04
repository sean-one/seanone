import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

// styling
import './Header.css';

class Header extends Component {

    toggleMenu = (event) => {
        const mobileMenu = document.getElementById('mobileWrap');
        mobileMenu.classList.toggle('activeMenu');
        // console.log('click', mobileMenu)
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
                    <div id='mobileWrap' className='mobileMenuWrapper'>
                        <ul className='mobileMenu'>
                            <Link to='/about'><li onClick={this.toggleMenu}>About</li></Link>
                            <Link to='/work'><li onClick={this.toggleMenu}>Work</li></Link>
                            <Link to='/contact'><li onClick={this.toggleMenu}>Contact</li></Link>
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
