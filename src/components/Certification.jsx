import React, { useState } from 'react'

function Certification({ name, issuer, file, description }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className=" max-w-[300px]  bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center">
        {/* Image de certification */}
        <img 
          src={file} 
          alt={name}
          className="w-32 h-32 object-contain mb-4"
        />
        
        {/* Titre et émetteur */}
        <h3 className="font-montserrat font-bold text-black text-center mb-1">
          {name}
        </h3>
        <div className="text-sm text-gray-text mb-3">
          {issuer}
        </div>

        {/* Bouton Tell me more */}
        <button
          onClick={() => setShowDescription(!showDescription)}
          className="px-4 py-2 bg-custom-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
        >
          {showDescription ? 'Show Less' : 'Tell me more'}
        </button>

        {/* Description avec animation */}
        {showDescription && (
          <p className="text-sm text-gray-text mt-4 transition-all duration-300 ease-in-out">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default Certification 