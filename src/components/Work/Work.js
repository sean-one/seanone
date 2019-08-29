import React, { Component } from 'react';

// components
import Lang from '../Lang/Lang';

// images
import LambdaUI from '../../images/lambdaUI.png';
import LambdaTimes from '../../images/lambdaTimes.gif';

// styles
import './Work.css';

class Work extends Component {
    render() {
        return (
            <div className='workSection'>
                <h2>Past Projects</h2>
                <div className='projectContainer'>
                    <div className="project">
                        <div className='projectImage'>
                            <img id='lambdaUI' src={LambdaUI} alt='Lambda Sprint Challenge - User Interactions' />
                        </div>
                        <div className='projectInfo'>
                            <h3>User Interface Sprint (School Project)</h3>
                            <p>In our User Interface sprint, we were tasked with creating a responsive website with mobile, tablet and desktop break points.  During this project we were also expected to create a pixel perfect copy of the provided design files.</p>
                            <a href='https://github.com/sean-one/Sprint-Challenge--User-Interface' target='blank'>Check out this project on Github.</a>
                        </div>
                    </div>
                    <div className="project">
                        <div className='projectImage'>
                            <img id='lambdaTimes' src={LambdaTimes} alt='Lambda Times' />
                        </div>
                        <div className='projectInfo'>
                            <h3>Lambda Times (School Project)</h3>
                            <p>In order to further our experience in React.  During the Lambda Times sprint we focus on functional components, lifecycles, checking props & styling components dynamically.</p>
                            <a href='https://github.com/sean-one/Sprint-Challenge-Lambda-Times-React' target='blank'>Check out this project on Github.</a>
                        </div>
                    </div>
                    <Lang />
                </div>
            </div>
        );
    }
}

export default Work;
