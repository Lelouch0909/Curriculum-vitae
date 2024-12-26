import React from 'react'

function Language({text, note}) {
  const maxNote = 5;
  
  return (
    <div className='flex items-center gap-2'>
      <div className='text-gray-text'>{text}</div>
      <div className='flex gap-1'>
        {[...Array(maxNote)].map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full ${
              index < note ? 'bg-black-bg': 'bg-gray-text'  
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Language