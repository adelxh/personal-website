import React from 'react'
import '../App.css';
import Fade from 'react-reveal/Fade';
import workPic from '../work1.png'
import workPic2 from '../work2.png'
import './Projects.css'

const Work = () => {
    const firstLink = "https://app.mystudylife.com/?utm_source=mystudylife.com&utm_medium=get-the-app-hero";
    const foodSearch = "https://epic-hamilton-053aab.netlify.app/";
    return (
        <Fade left>
        <div className="projects">
            <h1>My Projects</h1>
            <div className="myProjects">
                <div className="project1">
                    <img src={workPic} alt=""/>
                    
                    <h5>To-Do List</h5> 
                </div>
                <div className="project2">
                    <img align="middle" src={workPic2} alt=""/>
                    <h5>Food Recipe App</h5>
                    
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default Work;
