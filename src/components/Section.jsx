import React from 'react'
import Title from './Title'

function Section({title, children}) {
  return (
    <div className=''>
        <Title title={title}></Title>
        {children}
    </div>
  )
}

export default Section