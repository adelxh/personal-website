import React from 'react'
import '../App.css'
import './Projects.css'
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide'

const About = () => {
    return (
        <Slide left>
        <div>
            <h1>Welcome !</h1>
            <p className="about-me">
            I am very glad you ended up crossing my personal website. Let me tell you a little bit about myself...
            I am a full-stack web developer who has a great passion in web development. I always wanted to build something for people to see and enjoy. 
            I love working with the front end portion of a web application but lately have found myself interested in the back-end as well. Making a website look pretty is very fun but making it make sense has become a very big part of my success in the field. 
            My expertise is: <b> ReactJS, AngularJS, MySQL, NodeJS, ExpressJS, and Java. </b> Please have a look at my recent work!

            </p>
            <Link className="learn-more" to="/work">Take a look at my work!</Link>
        </div>
        </Slide>
    )
}

export default About
