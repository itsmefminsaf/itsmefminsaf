"use client";

import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-full max-w-5xl rounded-xl bg-neutral-900 p-5 duration-500">
      <h4 className="text-2xl font-bold">About me</h4>
      <p className="m-3">
        I am an autodidact who is fueled by an insatiable curiosity for how
        complex systems work and interact. I am specialized in building full
        stack web applications using a modern tech stack that emphasizes
        performance and simplicity. From complex authentication architectures to
        responsive, high-performance frontends, I enjoy the challenge of
        building systems that are both robust and easy to use.
        {showMore && (
          <>
            <br />
            <br />
            I don&apos;t just write code; I engineer systems designed for
            longevity. I thrive on the challenge of transforming abstract
            requirements into clean, performant, and reliable technical
            solutions. My goal is to bridge the gap between technical complexity
            and intuitive user experiences, ensuring that the systems I build
            are not only functional today but built to evolve alongside
            tomorrow&apos;s demands.
            <br />
            <br />
            Beyond technical implementation, my long-term vision is to engineer
            a cleaner digital landscape—one stripped of unnecessary noise and
            friction. I am committed to building refined, intentional tools that
            solve genuine, real-world problems rather than adding to the digital
            clutter. By focusing on essential functionality and purposeful
            design, I aim to utilize technology as a catalyst for clarity,
            contributing to a more beautiful, efficient, and thoughtful world
            for everyone who interacts with the systems I create.
          </>
        )}
      </p>

      <button
        onClick={() => setShowMore(!showMore)}
        className="ml-auto flex items-center gap-2 rounded-lg bg-neutral-800 px-3 py-1 duration-500 hover:bg-neutral-700"
      >
        {showMore ? <MdExpandLess /> : <MdExpandMore />}
        {showMore ? "Read less" : "Read more"}
      </button>
    </section>
  );
};

export default About;
