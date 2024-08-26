import React, { useContext } from 'react'
import { Context } from '../context/Context'

const Address = () => {

  const {datos} = useContext(Context)

  return (
    <div className='address'>
      <h2>{datos?.boton2}</h2>
      <p>{datos?.direccion}</p>
    </div>
  )
}

export default Address
