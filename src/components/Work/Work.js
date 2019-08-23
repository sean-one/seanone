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
                            <h3>Lambda User Interactions Sprint (School Project)</h3>
                            <p>Magna aute exercitation fugiat deserunt sit proident laborum in. Do ut aliqua aliquip pariatur reprehenderit. Esse officia sit consectetur consequat Lorem consectetur aute ea est occaecat aute et. Dolore aliquip magna magna mollit occaecat consequat deserunt culpa.</p>
                            <a href='https://github.com/sean-one/Sprint-Challenge-Lambda-Times-React' target='blank'>this be the link yo</a>
                        </div>
                    </div>
                    <div className="project">
                        <div className='projectImage'>
                            <img id='lambdaTimes' src={LambdaTimes} alt='Lambda Times' />
                        </div>
                        <div className='projectInfo'>
                            <h3>Lambda Times (School Project)</h3>
                            <p>Magna aute exercitation fugiat deserunt sit proident laborum in. Do ut aliqua aliquip pariatur reprehenderit. Esse officia sit consectetur consequat Lorem consectetur aute ea est occaecat aute et. Dolore aliquip magna magna mollit occaecat consequat deserunt culpa.</p>
                            <a href='https://github.com/sean-one/Sprint-Challenge--User-Interface' target='blank'>this be the link yo</a>
                        </div>
                    </div>
                    <Lang />

                </div>
            </div>
        );
    }
}

export default Work;
