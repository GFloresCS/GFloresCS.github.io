import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faPython, faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faAndroid, faAws, faUnity, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';

const MyTools = () => {
    return (
        <div className="tools-wrapper container-fluid ps-4 pe-4 pe-md-5 ps-md-5">
            <div className="tools-info row">        
                <h2><span className="section-heading">My Skills and Tools</span></h2>
                <p>
                    I've worked with different languages, technologies, and tools such as: 
                </p>
                <div className="tools col-6 col-sm-4 col-md-3 col-lg-2">
                    <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
                    <p>Java</p>
                </div>
                <div className="tools col-6 col-sm-4 col-md-3 col-lg-2">
                    <FontAwesomeIcon icon={faPython}></FontAwesomeIcon>
                    <p>Python</p>
                </div>
                <div className="tools col-6 col-sm-4 col-md-3 col-lg-2">
                    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                    <p>HTML5</p>
                </div>
                <div className="tools col-6 col-sm-4 col-md-3 col-lg-2">
                    <FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon>
                    <p>CSS3</p>
                </div>
                <div className="tools col-6 col-sm-4 col-md-3 col-lg-2">
                    <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon>
                    <p>JavaScript</p>
                </div>
                <div className="tools col-6 col-sm-4 col-md-3 col-lg-2">
                    <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                    <p>React</p>
                </div>
                <div className="tools col-6 col-sm-4 col-md-3 col-lg-2">
                    <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
                    <p>Node.js</p>
                </div>
                <div className="tools col-6 col-sm-4 col-md-3 col-lg-2">
                    <FontAwesomeIcon icon={faAndroid}></FontAwesomeIcon>
                    <p>Android Studio</p>
                </div>
                <div className="tools col-6 col-sm-4 col-md-3 col-lg-2">
                    <FontAwesomeIcon icon={faAws}></FontAwesomeIcon>
                    <p>Lambda, S3</p>
                </div>
                <div className="tools col-6 col-sm-4 col-md-3 col-lg-2">
                    <FontAwesomeIcon icon={faUnity}></FontAwesomeIcon>
                    <p>Unity</p>
                </div>
                <div className="tools col-6 col-sm-4 col-md-3 col-lg-2">
                    <FontAwesomeIcon icon={faGitAlt}></FontAwesomeIcon>
                    <p>Git</p>
                </div>
                <div className="tools col-6 col-sm-4 col-md-3 col-lg-2">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    <p>GitHub</p>
                </div>
            </div>
        </div>
    )
}

export default MyTools