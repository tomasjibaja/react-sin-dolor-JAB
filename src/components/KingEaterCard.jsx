import React from 'react'

const KingEaterCard = ({ nombre, vacasComidas, reinado }) => {
  return (
    <div className='king-card'>
      <p><span>{nombre.toUpperCase()}</span> ha comido {vacasComidas} vacas en sus {reinado} años de reinado.</p>
      <img src={`./images/rey_${nombre.toLowerCase()}.png`} alt="" />
    </div>
  )
}

export default KingEaterCard
