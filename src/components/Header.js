import React, { Component } from 'react';
import resumePDF from '../assets/arun.pdf'; // Import your local resume PDF
import Typed from 'typed.js';
import code from '../assets/code1.gif';
import ball from '../assets/ball.gif'



export default class Header extends Component {
  componentDidMount() {
    var typed = new Typed('#typed', {
      strings: ['  Frontend Developer' ], // Add more strings as needed
      typeSpeed: 50,
      backSpeed: 25,
      startDelay: 500,
      backDelay: 1000,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    });

    this.typed = typed; // Save the Typed instance to use it later

    // If you need to do something else when the component mounts, you can add it here
  }

  componentWillUnmount() {
    // Clean up resources (e.g., cancel subscriptions, clear intervals) when the component unmounts
    if (this.typed) {
      this.typed.destroy();
    }
  }
  
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          {/* <p style={{color:'white', marginRight:'1100px'}}>Arun Kumar M</p> */}
            <ul id="nav" className="nav">
              
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
              
               <div className="spring-animation">
               <h1 style={{ fontSize: '0.8em' }} className="responsive-headline ">I <span className='wave' style={{ fontSize: '0.8em' }} >👋 </span> am {resumeData.name}</h1>
           <h2>   <span id="typed" style={{ display: 'inline-block', fontSize: '1em', color: 'yellow' , fontFamily:'Merriweather', fontWeight:'300' }}>
               
            </span>
            </h2> 
               </div>
               <div className="zoom-animation">

             
               <h3 style={{color:'#fff', fontSize: '1em'  }}> {resumeData.roleDescription}
               </h3>
               </div>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
               <div className='code'>
          {/* <img src={code} ></img> */}
          <img src={code} ></img>

         </div>
         <div className='code1'>
          <img src={code} ></img>

         </div>

            </div>
            <div className="resume-download-button"   >
                <a href={resumePDF} download="Arun Kumar M BE.pdf">
                  Download Resume
                </a>
              </div>
          
         </div>
      

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}