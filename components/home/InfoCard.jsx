import React from 'react'

export const InfoCard = ({ title, legend }) => {
  return (
    <div className='info-card'> 
        <h2 
          className='title' 
          // style={{ color: '#1C46A1'}}
          >{ title }</h2>
        <span className='legend'>{ legend }</span>
    </div>
  )
}
