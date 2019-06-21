import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Lang.css';
import LambdaLogo from '../../images/Lambda_Logo_white.png';
// import LambdaLogo from '../../images/Lambda_Logo.png';

class Lang extends Component {
    render() {
        return (
            <div className='languages'>
                <div className='school'>
                    <img src={LambdaLogo} alt="Lamda School" />
                </div>
                <div className='code'>
                    <div>
                        <FontAwesomeIcon icon={['fab', 'html5']} size="6x" />
                        <p>html</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={['fab', 'css3-alt']} size="6x" />
                        <p>css</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={['fab', 'js-square']} size="6x" />
                        <p>Javascript</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={['fab', 'python']} size="6x" />
                        <p>Python</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={['fab', 'node-js']} size="6x" />
                        <p>Node JS</p>
                    </div>
                    <div>
                        <span className='cText'>c</span>
                        <p>C</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lang;
