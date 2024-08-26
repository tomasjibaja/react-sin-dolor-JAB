import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'

const Pagina1 = () => {

  const {color} = useContext(Context)

  return (
    <div className='hijo' style={{ backgroundColor: color }}>
      <h2>Página</h2>
    </div>
  )
}

export default Pagina1
