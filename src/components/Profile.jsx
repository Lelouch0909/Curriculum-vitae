import React from "react";
import tof from '../assets/me.jpg'
function Profile({ name, lastName, job }) {
  return (
    <div>
      <div className="flex items-center justify-around font-montserrat">
        <div className="border-solid border-4  w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center  rounded-full overflow-hidden shadow-lg shadow-gray-500/50">
          <img
            src={tof}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-2xl lg:text-3xl text-gray-text">{name}</p>
          <h1 className="text-4xl lg:text-5xl font-bold">{lastName}</h1>
          <p className="text-sm lg:text-base text-gray-text">{job}</p>
        </div>
      </div>
     
    </div>
  );
}

export default Profile;
