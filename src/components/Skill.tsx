import React from "react";
import skills from "../data/skills.json";

const Skill = () => {
  return (
    <div className="grid-item">
      <h4 className="item-title">Skills</h4>
      <ul className="flex gap-3 flex-wrap justify-between">
        {skills?.map((skill) => {
          return <li className="skill">{skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skill;
