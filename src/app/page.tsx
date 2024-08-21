import Image from "next/image";
import React from "react";
import linkedin from "../../public/in.png";
import github from "../../public/github.png";
import Link from "next/link";
import profilepic from "../../public/profilepic.jpg";

const page = () => {
  return (
    <main className="flex items-center justify-around flex-col w-full h-screen">
      <div>
        <Image
          src={profilepic}
          alt="me"
          width={256}
          height={256}
          className="rounded-3xl"
        />
      </div>
      <div className="flex items-center justify-around flex-col gap-4">
        <h1 className="text-white text-7xl font-extrabold">FM Insaf</h1>
        <p className="text-slate-300">
          Find me on internet{" "}
          <span className="bg-slate-400 text-black opacity-85 rounded-lg px-2 py-1">
            @itsmefminsaf
          </span>
        </p>
        <div className="flex gap-2 items-center justify-evenly p-7 rounded-lg border-3">
          <Link href="https://linkedin.com/in/itsmefminsaf" target="_blank">
            <Image
              src={linkedin}
              alt="linked in profile"
              width={36}
              height={36}
            />
          </Link>
          <Link href="https://github.com/itsmefminsaf" target="_blank">
            <Image src={github} alt="github profile" width={36} height={36} />
          </Link>
        </div>
      </div>{" "}
    </main>
  );
};

export default page;
