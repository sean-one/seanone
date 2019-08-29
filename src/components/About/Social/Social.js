import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// styling
import './Social.css';

class Social extends Component {
    render() {
        return (
            <div className='socialWrapper'>
                <div className='instagram'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="5x" />
                    </div>
                    <div className='username'>
                        <p>SENOR_ONE_MORE</p>
                    </div>
                </div>
                <div className='github'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={['fab', 'github']} size="5x" />
                    </div>
                    <div className='username'>
                        <p>sean-one</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Social;