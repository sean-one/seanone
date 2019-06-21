import React, { Component } from 'react';
import Monitor from '../../images/placeholder-250.png';

// styles
import './Work.css';

class Work extends Component {
    proSelect = (e) => {
        console.log('click', e)
    }
    render() {
        return (
            <div className='workSection'>
                <h2>Past Projects</h2>
                <div className='projectContainer'>
                    <div className="project project1" onClick={(e) => this.proSelect(e)}>
                        <img src={Monitor} alt="project one placeholder" />
                    </div>
                    <div className="project project2">
                        <img src={Monitor} alt="project two placeholder" />
                    </div>
                    <div className="project project3">
                        <img src={Monitor} alt="project three placeholder" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
