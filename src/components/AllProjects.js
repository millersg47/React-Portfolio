import React, { useState } from "react";
import Project from "./Project";
import img from "../images/img.jpg";

function AllProjects() {
  const projectInfo = [
    {
      name: "project name",
      image: img,
      github: "millersg47",
      deployed: "link",
    },
  ];

  return (
    <div>
      <h1>This contains all the projects</h1>
      {projectInfo.map((data) => (
        <div>
          <h3>{data.name}</h3>
          <img src={data.image}></img>
        </div>
      ))}
    </div>
  );
}

export default AllProjects;
