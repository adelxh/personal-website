import React, { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import Parallax from 'react-rellax'; 
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Link } from "react-scroll";
import Typical from 'react-typical';
import workPic from './work1.png'
import workPic2 from './work2.png'
import './Phone.css'
// import About from './Pages/About';
// import Home from './Pages/Home';
// import Work from './Pages/Work';
// import Contact from './Pages/Contact'




export const App = () => {


  useEffect(() => {
    AOS.init(); 
   }, []);



   const [visible, setVisible] = useState(false); 

   const toggleVisible = () => {
     if (window.pageYOffset > 300) {
       setVisible(true); 
     }
     else if (window.pageYOffset <=300) {
       setVisible(false); 
     }
   }
   const scrollToTop = () => {
   
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      }); 

    
   }

   window.addEventListener("scroll", toggleVisible);

   const openNav = () => {
     document.getElementById('sidenav').style.width='250px'; 

   }
   const closeNav = () => {
    document.getElementById('sidenav').style.width='0';
 
   }

   const githubLink = "https://github.com/adelxh/to-do";
   const recipeAppLive = "https://epic-hamilton-053aab.netlify.app";
   const myGithub = "https://github.com/adelxh";
   const foodAppGithub = "https://github.com/adelxh/react-recipe-app"; 
  
    return (
        <Router>
    <div>
        {/* navigation system */}
        <div id="sidenav" className="sidenav">
          <a href="javascript:void(0)" className="close-btn" onClick={closeNav}>&times;</a>
          <Link to="about-section" spy={true} smooth={true}>About</Link>
          <Link to="my-work" spy={true} smooth={true}>Projects</Link>
          <Link to="contact" spy={true} smooth={true}>Contact</Link>


        </div>
        <span style={{fontSize: '30px'}} onClick={openNav}>&#9776;</span>
        <div>
          <Parallax speed={2}>

             <h1 data-aos="fade-right" data-aos-duration="2000">Adel Akhmed</h1>
          </Parallax>
          <Parallax speed={3}>
          
          </Parallax>
        <p className="intro">Hi, My name is Adel. I am a <b>Full-Stack Web Developer</b>
        </p>
 
        {/* <a className="learn-more" href="#">Learn More</a> */}
        <Parallax speed={3}>
        <Link to="about-section" spy={true} smooth={true}  duration={1000} className="learn-more">Learn More</Link>
        </Parallax>
        </div>
     
     
        <div id="about-section">
          

        
        <h1 data-aos="fade-down" data-aos-duration="3000">Learn More About Me!</h1>

          <p data-aos="fade-left" data-aos-duration="2500" className="about">Hello My name is Adel Akhmed. I am very happy you came across my website. I am a Full-Stack Web Developer who has great passion in creating projects for the world to see. I have several years' experience in Front End Frameworks such as ReactJS and Angular as well as back end technologies such as NodeJS. I am most familier with the MERN stack in which I build the majority of my projects and the projects for my clients as I am a Freelance Web Developer. Please have a look at my recent work. <Link to="my-work" spy={true} smooth={true} duration={500} className="my-work" >My Work {' > '}</Link></p>

        </div>
       

        <div id="my-work">
          <h1 data-aos="zoom-in-right" data-aos-duration="2000">My Projects</h1>
   
          <div data-aos="flip-right" data-aos-duration="2000" className="work1">
            <h5>To-Do List</h5>
            <img src={workPic} alt="" />
            <p>Vanilla Javascript Project in which you can add tasks or delete them. The Date is displayed as well. </p>
            <a href={githubLink} target="_blank" className="btn-view-1">View On github</a>
          </div>
         
 
          <div data-aos="flip-right" data-aos-duration="2000" className="work2">
            <h5>Food Recipe App</h5>
            <img src={workPic2} alt="" />
            <p>ReactJS project in which I used food API. I connected it to my website and implemented search bar in which a user is able to </p>
            <a href={recipeAppLive} target="_blank" className="btn-view-1">View Live</a>
            <a href={foodAppGithub} target="_blank" className="btn-view-2">View On Github</a>
          </div>
        




        </div>
        <div data-aos-duration="3000" className="more-projects">
          <h3>To view more projects please visit my github page</h3>
          <a href={myGithub} target="_blank">Github</a>
        </div>

        {/* contact me section  */}

        <div data-aos-duration="2500" id="contact" className="contact-me">
          <h1>Contact Me!</h1>
          <a href="mailto:adelxh@gmail.com?subject = Feedback&body = Message">
          Send Email
          </a>
        </div>
            {/* <div className="to-top" style={{display: visible ? 'inline' : 'none'}}> */}
        {/* <a onClick={scrollToTop} spy={true} smooth={true} duration={1500} >^</a> */}
        {/* </div> */}
       
      
      {/* routing system */}
      {/* <Switch> */}
         
         {/* <Route  path="/contact" component={Contact} /> */}
  
 
      {/* </Switch>  */}
    </div>

    </Router>

    
    )
}



export default App