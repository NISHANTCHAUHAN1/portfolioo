import React from "react";
import "./about.css";
import theme_partt from "../../assets/theme_pattern.svg";
import SkillList from "../common/SkillList";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
// import checkMarkIconLight from '../../assets/checkmark-light.svg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_partt} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={'/portfolio-img2.jpg'} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hey, my name is Nishant, and I'm a Frontend Developer. My passion
              is to create and develop a clean UI/UX for my users. My main stack
              currently is React.js in combination with Tailwind CSS.
            </p>

            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
            <section id="skills" className="container">
              <h1 className="sectionTitle">Skills</h1>
              <div className="skillList">
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="React" />
              </div>
              <hr />
              <div className="skillList">
                <SkillList src={checkMarkIcon} skill="Redux-Toolkit" />
                <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
                <SkillList src={checkMarkIcon} skill="Git" />
              </div>
              <hr />
              <div className="skillList">
                <SkillList src={checkMarkIcon} skill="C, C++" />
                <SkillList src={checkMarkIcon} skill="Python (Basic)" />
              </div>
            </section>
          </div>
        </div>
      </div>
  );
};

export default About;
