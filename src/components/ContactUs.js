import React, { Component } from 'react';
import cont from "../assets/contact5.gif"
export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
              <img
                src= {cont}
                className="rotated-image"
                alt="Rotated Giphy"
              />
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              {/* <h4>
                LinkedIn : 
                <a href={` www.linkedin.com/in/arun-kumar-m-020669275/${resumeData.linkedinId}`} target="_blank" rel="noopener noreferrer">
                  {resumeData.linkedinId}
                </a>
              </h4> */}
             
          
              </div>
          
            </aside>
      
          </div>
          <form className="form-container" action="https://formspree.io/f/xnqejnvg" method="POST">
        
                <label className="form-label" htmlFor="name">Name:</label>
                <input
                  className="form-input"
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                  
                />

                <label className="form-label" htmlFor="email">Email:</label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />

                <label className="form-label" htmlFor="message">Message:</label>
                <input
                  className="form-input"
                  id="message"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  required
                />

                <button className="form-button" type="submit">Send Message</button>
              
              </form>
            
              
        </section>
        );
  }
}