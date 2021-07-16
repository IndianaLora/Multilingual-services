import React from "react";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import ClassIcon from "@material-ui/icons/Class";
import "./about.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="bg-100">
          <SpellcheckIcon className="about-icon" />
        </div>
        <div className="bg-200">
          <GTranslateIcon className="about-icon" />
        </div>
        <div className="bg-300">
          <ClassIcon className="about-icon" />
        </div>
      </div>
    </div>
  );
}

export default About;
