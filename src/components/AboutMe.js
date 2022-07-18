import React, { useState } from "react";
import profile from "../images/profile.jpg";
import "../styles/about.css";

function About() {
  return (
    <div className="page-bkg">
      <h1 className="about-heading">About</h1>
      <p className="about-text">
        Driven, curious Full Stack Web Developer with experience working
        collaboratively on projects. Always seeking opportunities to learn and
        develop coding skills. Pivoting from a career in project management to
        software engineering, bringing four years of experience and a breadth of
        PM knowledge. Outside of coding and software development, I enjoy
        running, cooking for friends, and taking my dog on adventures in the
        PNW.
      </p>
      <img className="profile" src={profile}></img>
    </div>
  );
}

export default About;
