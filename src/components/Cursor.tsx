import React from "react";

const Cursor = () => {
  var xPos = 100;
  var yPos = 100;

  return (
    <div
      className={`hidden fixed rounded-full bg-neutral-300 w-40 aspect-square opacity-50 shadow-2xl shadow-neutral-300 -z-10 top-[${yPos}px] left-[${xPos}px]`}
    ></div>
  );
};

export default Cursor;
