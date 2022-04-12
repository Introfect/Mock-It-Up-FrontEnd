import React from "react";
import qeusn from "../assets/svgs/quesn.svg";
import inter from "../assets/svgs/inter.svg";
function registrationForm() {
  return (
    <div className="about__section" id="about-tag">
      <div className="parent" id="fff">
        <h1 className="section__title about__section__title">About Us!</h1>
        <div className="baccha">
          <div className="conp">
            <div className="icon__holder">
              <img src={qeusn} alt="" className="quesn-pic" />
            </div>
            <div className="h2__holder">
              <h2>Tensed about giving an interview!? </h2>
            </div>
          </div>
          <div className="anss">
            <ul>
              <li>
                <div className="h2__holder">
                  <h2>
                    MockIt Up is a platform to test your domain knowledge in a
                    safe peer-to-peer environment.
                  </h2>
                </div>
              </li>
              <li>
                <div className="h2__holder">
                  <h2>
                    Additionally, you can easily choose the topics and areas you
                    want to test yourself in.
                  </h2>
                </div>
              </li>
              <li>
                <div className="h2__holder">
                  <h2>
                  Get one on one guidance along with a learning path based on your requirements from our team.
                  </h2>
                </div>
              </li>
              <li>
                <div className="h2__holder">
                  <h2>
                   Get exceptionally good at coding interviews by solving one problem every day.
                  </h2>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default registrationForm;