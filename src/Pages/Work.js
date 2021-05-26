import React from 'react'
import '../App.css';
import Fade from 'react-reveal/Fade';
import workPic from '../work1.png'

const Work = () => {
    const firstLink = "https://app.mystudylife.com/?utm_source=mystudylife.com&utm_medium=get-the-app-hero";
    return (
        <Fade left>
        <div>
            <h1>My Work</h1>
            <div className="projects">
                <a href={firstLink} target="_blank" >
            <img src={workPic} alt=""/>
            </a>
            </div>
        </div>
        </Fade>
    )
}

export default Work;
