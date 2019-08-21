import React, { Component } from 'react';
import Placeholder from '../../images/workPlaceholder.png';

// styles
import './Work.css';

class Work extends Component {
    proSelect = (e) => {
        console.log(e.target.id)
        
    }
    render() {
        return (
            <div className='workSection'>
                <h2>Past Projects</h2>
                <div className='projectContainer'>
                    <div className="project project1" onClick={(e) => this.proSelect(e)}>
                        <img id='lambdaUI' src={Placeholder} alt='Lambda Sprint Challenge - User Interactions' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
