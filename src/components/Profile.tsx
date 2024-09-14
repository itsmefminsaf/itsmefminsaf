import React from "react";
import profile from "../assets/profile.jpg";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="grid-item row-span-2 flex items-center justify-center aspect-square">
      <Image
        src={profile.src}
        alt="profile picture"
        className="w-[90%] rounded-full shadow-xl hover:shadow-white duration-500"
      />
    </div>
  );
};

export default Profile;
