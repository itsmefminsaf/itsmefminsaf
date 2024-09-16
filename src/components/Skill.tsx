import React from "react";
import skills from "../data/skills.json";

const Skill = () => {
  return (
    <div className="grid-item h-fit">
      <h4 className="item-title">My skills...</h4>
      <ul className="flex gap-3 flex-wrap">
        {skills?.map((skill, i) => {
          return (
            <li key={i} className="skill">
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skill;
