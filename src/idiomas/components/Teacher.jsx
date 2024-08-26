import React, { useContext } from 'react'
import { Context } from '../context/Context'

const Teacher = () => {

  const {datos} = useContext(Context)

  return (
    <div className='teacher'>
      <h2>{datos?.boton1}</h2>
      <img src={`./images/${datos?.foto}`} alt="" />
      <h3>{datos?.nombre}</h3>
    </div>
  )
}

export default Teacher
