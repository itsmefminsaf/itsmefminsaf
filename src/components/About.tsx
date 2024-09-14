import React from "react";
import Bio from "./Bio";
import Skill from "./Skill";

const About = () => {
  return (
    <div className="grid gap-4 row-span-2">
      <Bio />
      <Skill />
    </div>
  );
};

export default About;
