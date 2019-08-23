import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Lang.css';

class Lang extends Component {
    render() {
        return (
            <div className='languages'>
                <div className='code'>
                    <div className='langIcon'>
                        <FontAwesomeIcon icon={['fab', 'html5']} size="4x" />
                        <p>html</p>
                    </div>
                    <div className='langIcon'>
                        <FontAwesomeIcon icon={['fab', 'css3-alt']} size="4x" />
                        <p>css</p>
                    </div>
                    <div className='langIcon'>
                        <FontAwesomeIcon icon={['fab', 'js-square']} size="4x" />
                        <p>Javascript</p>
                    </div>
                    <div className='langIcon'>
                        <FontAwesomeIcon icon={['fab', 'python']} size="4x" />
                        <p>Python</p>
                    </div>
                    <div className='langIcon'>
                        <FontAwesomeIcon icon={['fab', 'node-js']} size="4x" />
                        <p>Node JS</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lang;
