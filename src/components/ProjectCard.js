import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Project({ data, i }) {
  return (
    <div
      // className={"card" + (i < 2 ? " top-card" : " bottom-card")}
      className={"card card-" + i}
      // style={!i ? { width: "30rem" } : { width: "18rem" }}
    >
      <img className="card-img-top" src={data.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">Github: {data.github}</p>
        {data?.deployed ? (
          <a href={data?.deployed} className="btn btn-primary">
            Deployed Site
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Project;
