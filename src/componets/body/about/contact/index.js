import React from "react";
import Separator from "../../../common/separator";
import SocialContact from "../../../common/social-contact";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">
        <b>Contact </b>
      </label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch Contact me on any of the platform. </p>
          <SocialContact />
        </div>

        <div className="download">
          <a
            download
            href={
              "http://calendar.zoho.com/attachment/view/zz0801122037afcc34b350cfccc738f20acd91e8c3a12061eafad87c564cc276cc25fec058"
            }
          >
            <i class="fi-rr-download download-icon"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
