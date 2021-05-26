import React from 'react'
import '../App.css';
import Slide from 'react-reveal/Slide'
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <Slide left>
        <div>
             <h1>Adel Akhmed</h1>
        <p>Hi, My name is Adel. I am a Full-Stack Web Developer</p>
        {/* <a className="learn-more" href="#">Learn More</a> */}
        <Link to="/about" className="learn-more">Learn More</Link>
        </div>
        </Slide>
    )
}
export default Home;