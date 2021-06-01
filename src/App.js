import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Slide from 'react-reveal/Slide'
import Parallax from 'react-rellax'; 
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Link, animateScroll as scroll } from "react-scroll";
import Typical from 'react-typical';
// import About from './Pages/About';
// import Home from './Pages/Home';
// import Work from './Pages/Work';




export const App = () => {
  useEffect(() => {
    AOS.init(); 
   }, []);
   
  
    return (
        <Router>
    <div>
        {/* navigation system */}
        <nav>
            <ul>
          <li><Link to="/">Home</Link></li>  
          <li><Link to="about-section" spy={true} smooth={true} duration={1100}>About</Link></li>
          <li><Link to="my-work" spy={true} smooth={true} duration={1100}>My Work</Link></li>
          <li><Link to="/">Contact Me</Link></li>
            </ul>    
        </nav>
       
        
        <div>
          <Parallax speed={2}>

             <h1 data-aos="fade-right" data-aos-duration="2000">Adel Akhmed</h1>
          </Parallax>
             <Parallax speed={3}>
        <p>Hi, My name is Adel. I am a{' '} <Typical loop={Infinity} wrapper='b'
          steps={[
            'Full-Stack Web Developer', 1000,
            'Web Designer', 500, 
            'App Developer', 500
          ]} />
        </p>
        </Parallax>
        {/* <a className="learn-more" href="#">Learn More</a> */}
        <Parallax speed={3}>
        <Link to="about-section" spy={true} smooth={true}  duration={1000} className="learn-more">Learn More</Link>
        </Parallax>
        </div>
     
        <div id="about-section">
          

          <h1 data-aos="fade-down" data-aos-duration="3000">Learn More About Me!</h1>
          <p data-aos="fade-left" data-aos-duration="2500">Hello My name is Adel Akhmed. I am very happy you came across my website. I am a Full-Stack Web Developer who has great passion in creating projects for the world to see. I have several years' experience in Front End Frameworks such as ReactJS and Angular as well as back end technologies such as NodeJS. I am most familier with the MERN stack in which I build the majority of my projects and the projects for my clients as I am a Freelance Web Developer. Please have a look at my recent work. <a className="my-work" href="">My Work ></a></p>
       
        </div>

        <div id="my-work">
          <h1>My Projects</h1>

          

        </div>
    
       
      
      {/* routing system */}
      {/* <Switch>
          <Route path="/" exact component={Home} />
         <Route  path="/about" component={About} />
         <Route path="/work" component={Work} />
 
      </Switch> */}
    </div>

    </Router>

    
    )
}



export default App