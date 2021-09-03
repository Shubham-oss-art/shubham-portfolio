import React from "react";
import "./mobile.css";
function Mobile({ isOpen, setIsOpen }) {
  //destructuring
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi-rr-cross-circle"></i>
      </div>

      <div className="mobile-options ">
        <div className="mobile-option">
          <a href="#project">
            <i class="fi-rr-edit-alt option-icon"></i> projects
          </a>
        </div>

        <div className="mobile-option">
          <a href="#skills">
            <i class="fi-rr-laptop option-icon"></i>Skils
          </a>
        </div>

        <div className="mobile-option">
          <a href="#work">
            <i class="fi-rr-briefcase option-icon"></i>work
          </a>
        </div>

        <div className="mobile-option">
          <a href="#contact">
            <i class="fi-rr-portrait option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
