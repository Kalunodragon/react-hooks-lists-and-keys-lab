import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const ListElements = projects.map(item => ProjectItem(item))

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {ListElements}
      </div>
    </div>
  );
}

export default ProjectList;
