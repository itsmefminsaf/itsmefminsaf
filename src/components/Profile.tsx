import React from "react";
import profile from "../assets/profile.jpg";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="place-self-center grid-item w-[95vw] md:w-full md:row-span-2 flex items-center justify-center aspect-square">
      <Image
        width={100}
        height={100}
        loading="eager"
        src={profile.src}
        alt="profile picture"
        className="w-[90%] rounded-full shadow-xl hover:shadow-white duration-500"
      />
    </div>
  );
};

export default Profile;
