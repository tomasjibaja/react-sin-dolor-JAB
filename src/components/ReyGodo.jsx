import React from 'react'

const ReyGodo = ({ props, buy }) => {

    const handleClick = () => {
        buy(props.precio, props.nombre)
        document.getElementById(props.nombre).style.display = 'none'
    }

    return (
    <div className='king-card' id={props.nombre} style={{ backgroundColor: `${props.color}` }}>
      <h2>{props.nombre}</h2>
      <img src={`./images/rey_${props.nombre.toLowerCase()}.png`} alt="" />
      <h3>Precio: ${props.precio}</h3>
      <button onClick={handleClick}>Comprar</button>
    </div>
  )
}

export default ReyGodo
