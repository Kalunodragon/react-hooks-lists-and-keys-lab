import React from "react";

function ProjectItem({ name, about, technologies }) {
  const SpanList = technologies.map((techItem) => <span key={techItem}>{techItem}</span>)
  return (
    <div className="project-item" key={name}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {SpanList}
      </div>
    </div>
  );
}

export default ProjectItem;
