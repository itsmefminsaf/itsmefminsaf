import React from "react";

const Profile = () => {
  return (
    <div className="child aspect-square max-sm:aspect-video max-md:aspect-video">
      <img
        src="/profilepic.jpg"
        alt="profile"
        className=" rounded-full border-4 p-2 shadow-xl hover:shadow-2xl duration-500 hover:shadow-slate-200 shadow-slate-200 max-sm:w-1/2 max-md:w-1/2 m-auto"
      />
    </div>
  );
};

export default Profile;
