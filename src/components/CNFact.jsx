import React from 'react'

const CNFact = ({ data, id }) => {
  return (
    <div className='joke-container' style={{ transform: 'scale(0.9)' }}>
        <img src={data?.icon_url} alt="Chuck Norris" />
        <q>{data?.value}</q>
        <p className="id">{id + 1}</p>
    </div>
  )
}

export default CNFact
