import React, { Component } from 'react';
import milkball from '../assets/milkball.webm';
import backgroundvideo from '../assets/file.mp4'

export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src="images/profilepic.jpg" alt="" />
               </div>

               <div className="nine columns main-col">
                  <center>
                     <h2>About Me</h2>
                  </center>
                  <p>{resumeData.aboutme}</p>

                  <div className="row">
                     <div className="columns contact-details">
                        <center>  
                           <h2>Contact Details</h2> 
                        </center>
                        <p className="address">
                           <span>{resumeData.name} M</span>
                           <br />
                           <span>{resumeData.address}</span>
                           <br />
                           <span>{resumeData.Email}</span>
                           <br />
                           <span>{resumeData.phone}</span>
                        </p>
                     </div>
                     <center>
                     <video autoPlay muted loop playsInline style={{ width: '35%', height: 'auto' }}>
                        <source src={milkball} type="video/mp4" />
                        Your browser does not support the video tag.
                     </video>
                     </center>
                     {/* Add the download button */}

                  </div>
               </div>
            </div>
         </section>
      );
   }
}
