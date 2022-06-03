import React from 'react';
import Logo from '../Logo.png';
//Font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" role={"navigation"}>
        <a className="navbar-brand" href="/#"><img className="logo" src={Logo} alt="My logo."/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                  <a className="nav-link" href="/#">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#about-section">About</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#tools-section">Tools</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#experience-section">Experience</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#projects-section">Projects</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#contact-section">Contact</a>
              </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar