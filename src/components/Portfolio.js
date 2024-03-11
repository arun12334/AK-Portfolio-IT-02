import React, { Component } from 'react';
import {
  DiReact,
  DiJavascript1,
  DiNodejs,
} from "react-icons/di";
import { FaAngular, FaHtml5, FaLaptop  } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { FaWindows, FaFileCode } from "react-icons/fa";

export default class Portfolio extends Component {
  navigateToProject = (link) => {
    window.open(link, '_blank');
  };

  render() {
    let resumeData = this.props.resumeData;
    const spriteWidth = 100; // Adjust this value based on the width of each individual image in the sprite

    return (
      <section id="portfolio">
        <h1>
          Professional
          <strong className='purple'> Skillset</strong>
        </h1>
        <div className="tech-icons-container">
        <h2 className="tech-icons">  <DiReact /> </h2>
          <h2 className="tech-icons">  <DiJavascript1 /> </h2>
          <h2 className="tech-icons">  <DiNodejs /> </h2>
          <h2 className="tech-icons">  <IoLogoIonic /> </h2>
          <h2 className="tech-icons">  <FaAngular /> </h2>
          <h2 className="tech-icons">  <FaHtml5 /> </h2>

        </div>
        <h1>
          <strong className='purple'>  Tools </strong> I Use
        </h1>
        <div className="tech-icons-container">
        <h2 className="tech-icons">  <TbBrandVscode /> </h2>
          <h2 className="tech-icons">  <SiPostman /> </h2>
          <h2 className="tech-icons">  <FaWindows /> </h2>
          <h2 className="tech-icons">  <FaFileCode /> </h2>
          <h2 className="tech-icons">  <FaLaptop /> </h2>

        </div>
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>
              Check Out Some of
              <strong className='purple'> My Works.</strong>
            </h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => (
                  <div key={index} className="columns portfolio-item">
                    <div className="item-wrap">
                      <img src={item.imgurl} className="item-img" alt={item.name} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <button
                            className="portfolio-item-button"
                            onClick={() => this.navigateToProject(item.link)}
                          >
                            View Project
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
