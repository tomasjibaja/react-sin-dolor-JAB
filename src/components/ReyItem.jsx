import React from 'react'

const ReyItem = ({ index, props, removeItem }) => {

    const handleClick = () => {
        removeItem(props.nombre, props.precio)
        document.getElementById(props.nombre).style.display = 'initial'
    }

  return (
    <div className='king-detail' id={`rey${index}`} key={index}>
        <img src={`./images/rey_${props.nombre.toLowerCase()}.png`} alt="" style={{ height: '30px'}}/>
        <h3>{props.nombre} - $<span>{props.precio}</span></h3>
        <span onClick={handleClick} style={{ cursor: 'pointer' }}>&#10005;</span>
    </div>
  )
}

export default ReyItem
