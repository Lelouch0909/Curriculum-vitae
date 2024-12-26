import React from 'react'

function Skill({ name, Icon }) {
  return (
    <div className="flex flex-col items-center gap-2 p-2">
      <div className="w-[40px] h-[40px] rounded-full border-2 border-black-bg flex items-center justify-center bg-custom-black hover:border-gray-400 transition-all">
        <Icon className="text-2xl text-white-text" />
      </div>
      <span className="text-xs text-white-text text-center">{name}</span>
    </div>
  )
}

export default Skill