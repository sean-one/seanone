import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// styling
import './Social.css';

class Social extends Component {
    render() {
        return (
            <div className='socialWrapper'>
                <a href='https://www.instagram.com/senor_one_more/' target='blank'>
                    <div className='instagram'>
                        <div className='icon'>
                            <FontAwesomeIcon icon={['fab', 'instagram']} size="6x" />
                        </div>
                        <div className='username'>
                            <p>SENOR_ONE_MORE</p>
                        </div>
                    </div>
                </a>
                <a href='https://github.com/sean-one' target='blank'>
                    <div className='github'>
                        <div className='icon'>
                            <FontAwesomeIcon icon={['fab', 'github']} size="6x" />
                        </div>
                        <div className='username'>
                            <p>SEAN-ONE</p>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default Social;