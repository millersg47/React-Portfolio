import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Project({ data }) {
  return (
    <div className="card" style="width: 18rem;">
      <img className="card-img-top" src={data.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">Github: {data.github}</p>
        <a href={data.deployed} className="btn btn-primary">
          Deployed Site
        </a>
      </div>
    </div>
  );
}

export default Project;
