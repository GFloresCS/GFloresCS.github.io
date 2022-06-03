import React from "react";
import { Tab } from "bootstrap";

const MyExperience = () => {
    var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
    triggerTabList.forEach(function (triggerEl) {
      var tabTrigger = new Tab(triggerEl)

      triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
      })
    })
    
    return (
        <div className="experience-wrapper container-fluid ps-4 pe-4 pe-md-5 ps-md-5" id="experience-section">
            <div className="experience-info px-md-5 row">
                <h2><span className="section-heading">Where I've Worked</span></h2>
                <div className="row pt-md-3">
                  <div className="experience-places col-sm-12 col-lg-5">
                    <div className="list-group" id="list-tab" role="tablist">
                      <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">CSUN Mobile Computing Group</a>
                      <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">CSUN Math Department</a>
                    </div>
                  </div>
                  <div className="experience-places col-sm-12 col-lg-7">
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                        <h3>Software Engineer <span className="location">at CSUN Mobile Computing Group</span></h3>
                        <ul>
                          <li>Developed an Android application to record, display, and analyze the gyroscope values of a smartphone using Android Studio as well as Firebase Cloud Storage to store the parsed data remotely.</li>
                          <li>Carried out over 250 experiments for fine-tuning the software prototype to achieve an accuracy of 72%.</li>
                          <li>Presented software development reports during multiple two-week sprints to ensure 100% on time delivery of prototype.</li>
                          <li>Worked with Dr. Nahapetian to construct 79-page thesis paper documenting the prototype analysis.</li>
                        </ul>
                      </div>
                      <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                      <h3>Math Tutor <span className="location">at CSUN Math Department</span></h3>
                        <ul>
                          <li>Promoted productivity and learning by communicating with each student and adapting to how they learned best whether through visual or auditory explanations, or simpler examples.</li>
                          <li>Reviewed student needs and difficulties for each upcoming lesson to develop tutoring plans with other tutors while working in the tutoring center as well as with professors while working as an in-class tutor.</li>
                          <li>Listened to and properly explained all questions students who had doubts about their work as well as praised and encouraged them for asking questions.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        
    )  
}
export default MyExperience