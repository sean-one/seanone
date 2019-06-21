import React, { Component } from 'react';

import './Lang.css';
import LambdaLogo from '../../images/Lambda_Logo_white.png';

class Lang extends Component {
    render() {
        return (
            <div className='languages'>
                <div className='school'>
                    <img src={LambdaLogo} alt="Lamda School" />
                </div>
                <div className='code'>
                    <div>
                        html
                    </div>
                    <div>
                        css
                    </div>
                    <div>
                        javascript
                    </div>
                    <div>
                        python
                    </div>
                    <div>
                        nodejs
                    </div>
                </div>
            </div>
        );
    }
}

export default Lang;
