import React from "react";
import About from "./about/index";
import Contact from "./about/contact";
import Projects from "./about/contact/projects";
import Skills from "./about/contact/projects/skills";
import Work from "./about/contact/projects/skills/work";
function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Work />
        <section id="contact">
          <Contact />
        </section>
      </section>
    </div>
  );
}

export default Body;
