import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Project({ name, type, year, award, description, github }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-montserrat font-bold text-black-text">{name}</h3>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-500" />
          </a>
        )}
      </div>
      <div className="text-sm text-gray-text mb-2">
        {type && <span>{type} | </span>}
        <span>{year}</span>
        {award && <span> | {award}</span>}
      </div>
      <ul className="list-disc list-inside text-sm text-gray-text">
        {description.map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Project 