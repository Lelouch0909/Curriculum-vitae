import React from "react";

function Title({ title }) {
  return (
    <div className="flex justify-center items-center my-2">
      <div className="bg-black-bg w-1/2 font-bold text-xl  rounded-lg text-white-text p-2">
        {title}
      </div>
      <div
        className="
    bg-black-bg w-1/2 h-[1px]"
      ></div>
    </div>
  );
}

export default Title;
