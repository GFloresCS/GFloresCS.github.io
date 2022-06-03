import React from "react";
import SelfPicture from "../PortfolioPicture.jpg";

const AboutMe = () => {
    return (
        <div className="about-wrapper container-fluid ps-4 pe-4 pe-md-5 ps-md-5" id="about-section">
            <div className="about-header px-md-5  col-lg-7 ms-auto">
                <h2><span className="section-heading">About Me</span></h2>
            </div>
            <div className="about-info info px-md-5 row">
                <div className="about-picture  col-lg-5">
                    <img className="selfpicture img-fluid img-thumbnail" src={SelfPicture} alt="Myself."></img>
                </div>
                <div className="about-writing  col-lg-7">
                    <p>
                        I graduated with a B.S. and an M.S. in Computer Science from <a href="https://www.csun.edu/" target="_blank" rel="noopener noreferrer">California State University Northridge</a> and I'm seeking to improve my skills as a software engineer. 
                        I always strive to finish projects and assignments on time which means managing my schedule well, adapting to new tools, working consistently, and communicating with my team to answer any questions that they, or I, might have.
                    </p>
                    <p>
                        Always wanting to learn more and improve my technical and communicative skills is what drives me.
                        Thinking critically and challenging myself to solve problems is what engages me. 
                        However, communicating effectively to achieve the needs of the user is what matters most to me. 
                        Analyzing and designing products with the user's needs in mind, providing technical documentation to maintain projects, writing easy to read code, 
                        and researching improvements are other skills that I take pride in. 
                    </p>      
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe