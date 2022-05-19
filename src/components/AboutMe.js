import React from "react";
import SelfPicture from "../PortfolioPicture.jpg";

const AboutMe = () => {
    return (
        <div className="about-wrapper container-fluid ps-4 pe-4 pe-md-5 ps-md-5">
            <div className="about-header col-md-6 col-lg-7 ms-auto">
                <h2><span className="section-heading">About Me</span></h2>
            </div>
            <div className="about-info row">
                <div className="about-picture col-md-6 col-lg-5">
                    <img className="selfpicture img-fluid img-thumbnail" src={SelfPicture} alt="Myself."></img>
                </div>
                <div className="about-writing col-md-6 col-lg-7">
                    <p>
                        I'm a Software Engineer who graduated with an M.S. in Computer Science from <a href="csun.edu">California State University Northridge</a>. Always wanting to learn more and improve my technical
                        and communicative skills is what drives me.
                    </p>
                    <p>
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