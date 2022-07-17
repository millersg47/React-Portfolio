import React, { useState } from "react";
import Project from "./ProjectCard";
import localExchange from "../images/local_exchange_hub.png";
import starParty from "../images/StarParty_main_page.png";
import teamProfile from "../images/team-profile-generator.png";
import textEditor from "../images/PWA-text-editor.png";

function AllProjects() {
  const projectInfo = [
    {
      name: "Local Exchange Hub",
      image: localExchange,
      github: "https://github.com/rkutsel/local-exchange-hub",
      deployed: "https://local-exchange-hub.herokuapp.com/",
    },
    {
      name: "StarParty",
      image: starParty,
      github: "https://github.com/millersg47/StarParty",
      deployed: "https://millersg47.github.io/StarParty/",
    },
    {
      name: "Team Profile Generator",
      image: teamProfile,
      github: "https://github.com/millersg47/team-profile-generator",
    },
    {
      name: "Text Editor",
      image: textEditor,
      github: "https://github.com/millersg47/text-editor",
      deployed: "https://text-editor-sgm.herokuapp.com/",
    },
  ];

  return (
    <div>
      <h1>This contains all the projects</h1>
      {projectInfo.map((data) => (
        <Project data={data}></Project>
      ))}
    </div>
  );
}

export default AllProjects;
