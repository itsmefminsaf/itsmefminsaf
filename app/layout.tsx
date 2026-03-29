import { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
import insaf from "@/assets/Insaf.png";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsReddit } from "react-icons/bs";
import { GiSriLanka } from "react-icons/gi";
import { FaStarAndCrescent } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { CgExternal } from "react-icons/cg";

export const metadata: Metadata = {
  title: "Muhammad Insaf Bin Farsan",
  description:
    "I am a Full Stack Developer who loves to build applications that actually solves problems",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en">
      <body className="flex flex-col items-center gap-3 bg-neutral-950 p-3 text-neutral-50">
        <header className="w-full max-w-5xl overflow-hidden rounded-xl bg-neutral-900 p-3">
          {/* the banner */}
          <div className="h-44 w-full bg-radial from-neutral-500 from-10% to-transparent to-20% bg-size-[20px_20px]"></div>

          {/* the profile picture */}
          <div className="mx-auto -mt-32 aspect-square w-48 overflow-hidden rounded-full border-8 border-neutral-900">
            <Image
              src={insaf.src}
              width={256}
              height={256}
              alt="Profile picture of Insaf"
            />
          </div>

          <div className="mb-3 text-center">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Muhammad Insaf <br className="sm:hidden" />
              <span className="text-neutral-500">ibn Farsan</span>
            </h1>

            <div className="mx-auto my-3 h-1 w-32 rounded-full bg-neutral-500" />

            <h3 className="text-neutral-300">
              Founder @{" "}
              <a
                href="https://peblebox.vercel.app"
                className="font-bold text-neutral-50 duration-300 hover:text-neutral-500"
              >
                Peblebox
              </a>{" "}
              | Full Stack Web Developer | Entrepreneur
            </h3>

            <div className="m-3 flex justify-center gap-2">
              <p className="flex items-center justify-center gap-2 rounded-lg bg-neutral-500/30 px-2 py-1">
                <FaStarAndCrescent /> Muslim
              </p>
              <p className="flex items-center justify-center gap-2 rounded-lg bg-neutral-500/30 px-2 py-1">
                <GiSriLanka /> Sri Lankan
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <a
                href="https://linkedin.com/in/itsmefminsaf"
                className="group flex items-center justify-center gap-2 rounded-lg bg-neutral-800/50 px-2 py-1 duration-300 hover:bg-neutral-400/50"
                target="_blank"
              >
                <BsLinkedin />
                <span> in/itsmefminsaf</span>
                <CgExternal className="scale-0 duration-300 group-hover:scale-100" />
              </a>

              <a
                href="https://github.com/itsmefminsaf"
                className="group flex items-center justify-center gap-2 rounded-lg bg-neutral-800/50 px-2 py-1 duration-300 hover:bg-neutral-400/50"
                target="_blank"
              >
                <BsGithub />
                <span> itsmefminsaf</span>
                <CgExternal className="scale-0 duration-300 group-hover:scale-100" />
              </a>

              <a
                href="https://reddit.com/u/iam_insaf"
                className="group flex items-center justify-center gap-2 rounded-lg bg-neutral-800/50 px-2 py-1 duration-300 hover:bg-neutral-400/50"
                target="_blank"
              >
                <BsReddit />
                <span> u/iam_insaf</span>
                <CgExternal className="scale-0 duration-300 group-hover:scale-100" />
              </a>

              <a
                href="https://www.upwork.com/freelancers/~012daf8939dfa8ba69?mp_source=share"
                className="group flex items-center justify-center gap-2 rounded-lg bg-neutral-800/50 px-2 py-1 duration-300 hover:bg-neutral-400/50"
                target="_blank"
              >
                <FaUpwork />
                <span> Upwork</span>
                <CgExternal className="scale-0 duration-300 group-hover:scale-100" />
              </a>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
};

export default RootLayout;
