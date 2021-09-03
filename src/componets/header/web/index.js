import React from "react";
import "./web.css";

function web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i class="fi-rr-edit-alt option-icon"></i> projects
        </a>
      </div>

      <div className="web-option">
        <a href="#skills">
          <i class="fi-rr-laptop option-icon"></i>Skils
        </a>
      </div>

      <div className="web-option">
        <a href="#work">
          <i class="fi-rr-briefcase option-icon"></i>work
        </a>
      </div>

      <div className="web-option">
        <a href="#contact">
          <i class="fi-rr-portrait option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default web;
