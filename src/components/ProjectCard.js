import React, { useState } from "react";

function Project({ data }) {
  return (
    <div>
      <h3>{data.name}</h3>
      <img src={data.image}></img>
    </div>
  );
}

export default Project;
