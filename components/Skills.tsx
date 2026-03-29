import { BiBrain } from "react-icons/bi";
import { BsClock, BsTypescript } from "react-icons/bs";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import {
  FaFigma,
  FaGit,
  FaLinux,
  FaNodeJs,
  FaReact,
  FaRust,
} from "react-icons/fa";
import { GrSystem, GrTask } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { SiJavascript, SiPython } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const Skills = () => {
  return (
    <section className="w-full max-w-5xl p-5">
      <h4 className="text-center text-2xl font-bold">
        Skills & specializations
      </h4>

      <div className="mx-auto mt-5 flex max-w-lg flex-wrap items-center justify-center gap-2">
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <RiNextjsFill />
          Next.js
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <BsTypescript />
          TypeScript
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <SiJavascript />
          JavaScript
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <TiHtml5 />
          HTML/CSS
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <FaReact />
          React
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <FaNodeJs />
          Node.js
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <SiPython />
          Python
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <FaRust />
          Rust (Learning)
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <DiPostgresql />
          PostgreSQL
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <DiMongodb />
          MongoDB
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <FaGit />
          Git & GitHub
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <FaLinux />
          Linux
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <FaFigma />
          Figma
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <BiBrain />
          Problem solving
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <GrSystem />
          System design
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <GrTask />
          Project management
        </p>
        <p className="flex items-center gap-2 rounded-full bg-neutral-700/30 px-3 py-1">
          <BsClock />
          Time management
        </p>
      </div>
    </section>
  );
};

export default Skills;
