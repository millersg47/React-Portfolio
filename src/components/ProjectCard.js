import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/projects.css";

function Project({ data, i }) {
  return (
    <div className="projects">
      <div
        // className={"card" + (i < 2 ? " top-card" : " bottom-card")}
        className={"card custom-card card-" + i}
        // style={!i ? { width: "30rem" } : { width: "18rem" }}
      >
        <img className="card-img-top" src={data.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title custom-card-title">{data.name}</h5>
          <a href={data.github} className="card-text custom-card-text">
            Github Repo
          </a>
          <br></br>
          {data?.deployed ? (
            <a href={data?.deployed} className="custom-card-text">
              Deployed Site
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Project;
