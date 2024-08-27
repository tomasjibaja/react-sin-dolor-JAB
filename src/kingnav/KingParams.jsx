import React from 'react'
import { useParams } from 'react-router-dom'

const KingParams = ({small}) => {
    const style = small ? { width: '300px' } : null
    const rey = useParams()
  return (
    <div className='king' style={style}>
        <img src={`/images/rey_${rey.rey}.png`} alt="king pic" style={style} />
      <h2>{rey.rey}</h2>
    </div>
  )
}

export default KingParams
