import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

function Experience({ title, comment, descriptions, github }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="mb-6 cursor-pointer text-start text-black"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="mb-2">
        <h3 className="font-montserrat font-bold">{title}</h3>
        <div className="flex gap-2 align-middle items-center">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-500" />
          </a>
        )}
        <div className="text- text-gray-text">{comment}</div>
        </div>
      </div>
      <ul className="list-disc list-inside text-sm text-black">
        {descriptions.map((comment, index) => (
          <li
            key={index}
            className={`mb-1 transition-all duration-300 ${
              isExpanded ? "" : "max-md:line-clamp-1"
            }`}
          >
            {comment}
          </li>
        ))}
      </ul>
      <button
        className="text-xs text-gray-500 mt-1 hover:text-black-text"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default Experience;
