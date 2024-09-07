import React from "react";

const Profile = () => {
  return (
    <div className="child aspect-square">
      <img
        src="/profilepic.jpg"
        alt="profile"
        className="rounded-full border-4 p-2 shadow-2xl shadow-slate-200"
      />
    </div>
  );
};

export default Profile;
