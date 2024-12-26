import React from 'react'

function Skills({name,skills, children}) {
  return (
    <div>
      <h2 className="font-bold font-montserrat text-sm">{name}</h2>
      {children}
    </div>
  )
}

export default Skills