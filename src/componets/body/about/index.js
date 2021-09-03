import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋 <br />
          <span className="info-name">I am Shubham</span>
          <br /> I Love Desgining New Webstites from Scratches
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png").default}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
