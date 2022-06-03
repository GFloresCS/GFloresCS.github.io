import Logo from '../Logo.png';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="contact-wrapper container-fluid ps-4 pe-4 pe-md-5 ps-md-5" id="contact-section">
            <div className="contact-info px-md-5 row">
                <div className="social-media-list col-md-12 col-lg-3 order-lg-2 row">
                    <div className="social-media col-3">
                        <a href="mailto:gustavoflorescs@gmail.com" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Email"><FontAwesomeIcon icon={faEnvelope} alt="Email"></FontAwesomeIcon></a>
                    </div>
                    <div className="social-media col-3">
                        <a href="https://github.com/GFloresCS" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} alt="Github" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Github"></FontAwesomeIcon></a>
                    </div>
                    <div className="social-media col-3">
                        <a href="https://www.linkedin.com/in/gustavoflorescs/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} alt="LinkedIn" data-bs-toggle="tooltip" data-bs-placement="bottom" title="LinkedIn"></FontAwesomeIcon></a>
                    </div>
                    <div className="social-media col-3">
                        <a href="https://twitter.com/GustavoFloresCS" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} alt="Twitter" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Twitter"></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className="footer col-6 col-lg-2 order-lg-0">
                    <a href="#home"><img className="logo" src={Logo} alt="My logo."/></a>
                </div>
                <div className="footer-note col-6 col-lg-7 order-lg-1">
                    <p><a href="https://github.com/GFloresCS/Portfolio" target="_blank" rel="noopener noreferrer" alt="Github portfolio" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Github portfolio">Designed and built by Gustavo Flores</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer