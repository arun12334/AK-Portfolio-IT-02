import React, { Component } from 'react';
import footerImage from '../assets/contact.gif';
import footerImage1 from '../assets/contact4.gif';
import footerImage3 from '../assets/contact2.gif';
import footerImage4 from '../assets/contact3.gif';



export default class Footer extends Component {

 
  render() {
   
    let resumeData = this.props.resumeData;
    return (
      <footer  >
        <div style={{textAlign:'left', position:"absolute", width:"100%", overflow : "hidden"}}>
        <img
                src= {footerImage4}
                className='rotated-image2'
                alt="Rotated Giphy"
              />
        <img
                src= {footerImage3}
                className='rotated-image1'
                alt="Rotated Giphy"
              />
        <img
        
                src= {footerImage}
                className='rotated-image1'
                alt="Rotated Giphy"
              />
               <img
                src= {footerImage1}
                className='rotated-image1'
                alt="Rotated Giphy"
              />
              


      </div>
      <div className="row">
        <div className="twelve columns">
       

          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          {/* <p style={{color : 'white'}}>Copyright © 2024, All Rights Reserved</p> */}
    
        </div>
          <p style={{color : 'white'}}>Copyright © 2024, All Rights Reserved</p>
        
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}