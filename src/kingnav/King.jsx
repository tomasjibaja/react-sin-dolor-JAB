import React from 'react'
import { Link } from 'react-router-dom'

const King = ( {props, small} ) => {
  const title = props.nombre.charAt(0).toUpperCase() + props.nombre.slice(1);
  const style = small ? { width: '300px' } : null
  return (
    <div className='king' style={style}>
      <Link to={`/${props.nombre}`} >
        <img src={`/images/${props.img}`} alt="king pic" style={style} />
      </Link>
      <h2>{title}</h2>
    </div>
  )
}

export default King
