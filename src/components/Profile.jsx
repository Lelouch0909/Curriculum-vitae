import React from "react";

function Profile({ name, lastName, job }) {
  return (
    <div>
      <div className="flex items-center justify-around font-montserrat">
        <div className="w-[100px] h-[100px] flex items-center justify-center bg-white rounded-full overflow-hidden">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </div>
        <div>
          <p className="text-2xl text-gray-text">{name}</p>
          <h1 className="text-4xl font-bold">{lastName}</h1>
          <p className="text-sm text-gray-text">{job}</p>
        </div>
      </div>
     
    </div>
  );
}

export default Profile;
