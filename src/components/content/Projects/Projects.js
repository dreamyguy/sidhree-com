import React, { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";

const Projects = () => {
  const data = useContext(DataContext);
  if (data) {
    console.log("IndexPage -> data", data);
    return <div className="row">PROJECTS</div>;
  }
  return null;
};

export default Projects;
