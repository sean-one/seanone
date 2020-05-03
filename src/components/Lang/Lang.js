import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Lang.css';

class Lang extends Component {
    render() {
        return (
            <div className='languages'>
                <div className='code'>
                    <a href='https://github.com/sean-one?utf8=%E2%9C%93&tab=repositories&q=&type=&language=html' target='blank'>
                        <div className='langIcon'>
                            <FontAwesomeIcon className='site-icons' icon={['fab', 'html5']} size="5x" />
                            <p>html</p>
                        </div>
                    </a>
                    <a href='https://github.com/sean-one?utf8=%E2%9C%93&tab=repositories&q=&type=&language=css' target='blank'>
                        <div className='langIcon'>
                            <FontAwesomeIcon className='site-icons' icon={['fab', 'css3-alt']} size="5x" />
                            <p>css</p>
                        </div>
                    </a>
                    <a href='https://github.com/sean-one?utf8=%E2%9C%93&tab=repositories&q=&type=&language=javascript' target='blank'>
                        <div className='langIcon'>
                            <FontAwesomeIcon className='site-icons' icon={['fab', 'js-square']} size="5x" />
                            <p>Javascript</p>
                        </div>
                    </a>
                    <a href='https://github.com/sean-one?utf8=%E2%9C%93&tab=repositories&q=&type=&language=python' target='blank'>
                        <div className='langIcon'>
                            <FontAwesomeIcon className='site-icons' icon={['fab', 'python']} size="5x" />
                            <p>Python</p>
                        </div>
                    </a>
                    <a href='https://github.com/sean-one?utf8=%E2%9C%93&tab=repositories&q=&type=&language=c' target='blank'>
                        <div className='langIcon'>
                            <FontAwesomeIcon className='site-icons' icon={['fab', 'node-js']} size="5x" />
                            <p>Node JS</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Lang;
