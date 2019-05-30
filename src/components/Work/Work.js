import React, { Component } from 'react';
import Monitor from '../../images/monitor.png';

// styles
import './Work.css';

class Work extends Component {
    render() {
        return (
            <div className='workSection'>
                <h2>Past Projects</h2>
                <div className='projectContainer'>
                    <div className="project1">
                        <div className="project1-media">
                            <img src={Monitor} alt="" />
                        </div>
                    </div>
                    <div className="project2">
                        project two
                    </div>
                    <div className="project3">
                        project three
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
