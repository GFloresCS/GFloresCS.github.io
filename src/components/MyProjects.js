import React from "react";
import FirebaseLogo from "../Firebase.png";
import KeyboardlessKeyboard from "../KeyboardlessKeyboard.png";
import MultiTweet from "../Multi-Tweet.png";
import P2PChat from "../P2PChat.png";
import AlexaLogo from "../Alexa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faPython, faAws, faTwitter, faJava, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const MyProjects = () => {
    return (
        <div className="projects-wrapper container-fluid ps-4 pe-4 pe-md-5 ps-md-5" id="projects-section">
            <div className="projects-info px-md-5 row gap-4">
                <h2><span className="section-heading">Projects I've Worked On</span></h2>

                {/*First Project*/}
                <div className="project-picture col-md-5 order-md-1">
                    <img className="keyboardless-keyboard-picture img-fluid" src={KeyboardlessKeyboard} alt="Keyboardless Keyboard Android Application"/>
                </div>
                <div className="project-description row col-md-7 order-md-0">
                    <h3>Keyboardless Keyboard</h3>
                    <p>An Android application developed for my <a href="https://scholarworks.csun.edu/handle/10211.3/221904" target="_blank" rel="noopener noreferrer">Master's thesis</a> which displays and records changes in the X, Y, and Z axis of a smartphone's gyroscope. 
                        This creates detection of finger taps at different lengths and directions surrounding the phone which allows for a different type of keyboard. </p>
                    <div className="tools row">
                        <div className="col-6">
                            <FontAwesomeIcon icon={faAndroid} alt="Android Studio" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Android Studio"></FontAwesomeIcon>
                        </div>
                        <div className="col-6">
                            <img className="project-logos img-fluid" src={FirebaseLogo} alt="Firebase" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Firebase"/>
                        </div>
                    </div>         
                    <div className="tools-button gap-3 row">
                        <button className="btn col-lg-4 btn-light" type="button" data-toggle="collapse" data-target="#collapse-keyboard" aria-expanded="false" aria-controls="collapseExample">More Info</button>
                        <a className="btn col-lg-4 btn-light" href="https://github.com/GFloresCS/Gyroscope" target="_blank" rel="noopener noreferrer">View Here <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon></a>
                    </div>         
                    {/*More Info Card*/}
                    <div className="collapse" id="collapse-keyboard">
                        <div className="card card-body">
                            <ul>
                                <li>Developed an Android application to record, display, and analyze the gyroscope values of a smartphone using Android Studio as well as Firebase Cloud Storage and Microsoft Excel to store the parsed data remotely.</li>
                                <li>Classified finger taps in 4 distances and 8 directions to create a keyboard surrounding the phone with 32 inputs using an Android application prototype to allow for a better human-computer interaction.</li>
                                <li>Carried out over 250 experiments for fine-tuning the software prototype to achieve an accuracy of 72%.</li>
                                <li>Presented software development reports during multiple two-week sprints to ensure 100% on time delivery of prototype.</li>
                                <li>Worked with Dr. Nahapetian to construct 79-page thesis paper documenting the prototype analysis.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/*Second Project*/}
                <div className="project-picture col-md-5 order-md-2">
                    <img className="multi-tweet-picture img-fluid" src={MultiTweet} alt="MultiTweet Application Example"/>
                </div>
                <div className="project-description row col-md-7 order-md-3">
                    <h3>Multi-Tweet</h3>
                    <p>An Alexa Skill developed for "Advanced Topics in Software Engineering" graduate class that manages posting tweets from multiple Twitter accounts using voice controls. </p>
                    <div className="tools row">
                        <div className="col-3">
                            <img className="project-logos img-fluid" src={AlexaLogo} alt="Alexa Skill" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexa Skill"/>
                        </div>
                        <div className="col-3">
                            <FontAwesomeIcon icon={faPython} alt="Python" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Python"></FontAwesomeIcon>
                        </div>
                        <div className="col-3">
                            <FontAwesomeIcon icon={faTwitter} alt="Twitter API" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Twitter API"></FontAwesomeIcon>
                        </div>
                        <div className="col-3">
                            <FontAwesomeIcon icon={faAws} alt="AWS (Lambda, S3, Cloudwatch)" data-bs-toggle="tooltip" data-bs-placement="bottom" title="AWS (Lambda, S3, Cloudwatch)"></FontAwesomeIcon>
                        </div>
                    </div>         
                    <div className="tools-button gap-3 row">
                        <button className="btn col-lg-4 btn-light" type="button" data-toggle="collapse" data-target="#collapse-twitter" aria-expanded="false" aria-controls="collapseExample">More Info</button>
                        <a className="btn col-lg-4 btn-light" href="https://github.com/GFloresCS/Multi-Tweet" target="_blank" rel="noopener noreferrer">View Here <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon></a>
                    </div>         
                    {/*More Info Card*/}
                    <div className="collapse" id="collapse-twitter">
                        <div className="card card-body">
                            <ul>
                                <li>Led a team of three people to develop an Alexa Skill application.</li>
                                <li>Worked with tools such as the Alexa Developer Console, Python, Twitter API, AWS Lambda, S3, and Cloudwatch to test and deploy the Alexa Skill.</li>
                                <li>Used Agile software development to create business objectives, user stories, and three prototypes during multiple two-week sprints.</li>
                                <li>Documented related works, requirements, architecture, two implementation guides for the user, possible improvements/extensions, and a <a href="https://sites.google.com/view/comp680group4/home" target="_blank" rel="noopener noreferrer">website</a> of our progression.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                                
                {/*Third Project*/}
                <div className="project-picture col-md-5 order-md-5">
                    <img className="peer-to-peer-picture img-fluid" src={P2PChat} alt="Peer-to-Peer Chat Application"/>
                </div>
                <div className="project-description row col-md-7 order-md-4">
                    <h3>Peer-to-Peer Chat</h3>
                    <p>A Java application for remote peer-to-peer messaging multiplexing between between multiples users for “Computer Network Software” undergraduate class.</p>
                    <div className="tools row">
                        <div className="col-6">
                            <FontAwesomeIcon icon={faJava} alt="Java" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Java"></FontAwesomeIcon>
                        </div>
                        <div className="col-6">
                            <FontAwesomeIcon icon={faGithub} alt="Github" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Github"></FontAwesomeIcon>
                        </div>
                    </div>         
                    <div className="tools-button gap-3 row">
                        <button className="btn col-lg-4 btn-light" type="button" data-toggle="collapse" data-target="#collapse-chat" aria-expanded="false" aria-controls="collapseExample">More Info</button>
                        <a className="btn col-lg-4 btn-light" href="https://github.com/GFloresCS/peer-to-peer-chat" target="_blank" rel="noopener noreferrer">View Here <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon></a>
                    </div>         
                    {/*More Info Card*/}
                    <div className="collapse" id="collapse-chat">
                        <div className="card card-body">
                            <ul>
                                <li>Led a team of two people to develope a CLI chat application made only with Java.</li>
                                <li>Sockets and threads were implemented to allow communication between multiple hosts and clients.</li>
                                <li>More than over 4500 port options available to the user.</li>
                                <li>Provided documentation for related research, installing prerequisites, building the program, and running the application.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProjects