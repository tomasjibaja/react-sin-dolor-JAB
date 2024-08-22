import React from 'react'

const Kin = ({ nombre }) => {

  const handleClick = (e) => {
    e.target.parentNode.remove()
  }

  return (
    <div className='kin'>
      <h3>{nombre}</h3>
      <button onClick={handleClick} style={{ cursor: 'pointer' }}>Borrar</button>
    </div>
  )
}

export default Kin
