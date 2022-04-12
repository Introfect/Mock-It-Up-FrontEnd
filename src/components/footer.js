import React from "react";
import * as Icon from "react-feather";
import { UilAirplay } from "@iconscout/react-unicons";
import { UilAt } from "@iconscout/react-unicons";
function footer() {
  return (
    <div className="footer-container">
      <div className="nameAdvertisement">
        <h1>Mock It Up</h1>
        <div className="rights">
          <h4>&#169; mockitup. All rights reserved.</h4>
        </div>
      </div>

      <div className="liner"></div>
      <div className="linker">
        <div className="col-1">
          <a href="#mainpage-id" className="navbar__footer-links">
            Home
          </a>
          <a href="#about-tag" className="navbar__footer-links">
            About
          </a>
        </div>
        <div className="col-2">
          <a href="#test" className="navbar__footer-links">
            Register
          </a>
          <a href="#contact-id" className="navbar__footer-links">
            Contact Us
          </a>
        </div>
      </div>
      <div className="liner"></div>

      <div className="social linker-1">
        <div className="social__element">
          <Icon.Mail />
          <a href="#">
            <span className="link__description">
              mockitup.services@gmail.com
            </span>
          </a>
        </div>
        <div className="social__element">
          <Icon.Phone />
          <span className="link__description">+91 6289594115</span>
        </div>
        <div className="social__element">
          <Icon.MapPin />
          <span className="link__description">Odissa , Bhubaneswar</span>
        </div>
        <div className="social__element">
          <div className="social__icons">
            <a href="https://www.instagram.com/mockit.up/" target="_blank">
              <Icon.Instagram size="2rem" />
            </a>
          </div>
          <div className="social__icons">
            <a href="https://twitter.com/MockIt_Up" target="_blank">
              <Icon.Twitter size="2rem" />
            </a>
          </div>
          <div className="social__icons">
            <a href="http://linkedin.com/company/mockit-up/" target="_blank">
              <Icon.Linkedin size="2rem" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
