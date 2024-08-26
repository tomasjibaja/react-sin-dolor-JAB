import React, { useContext } from 'react'
import { Context } from '../context/Context'

function Colores() {
  const {setColor} = useContext(Context)
  return (
    <div className='colores'>
        <div className='color' onClick={() => {setColor('#4285f4')}}></div>
        <div className='color' onClick={() => {setColor('#ea4335')}}></div>
        <div className='color' onClick={() => {setColor('#fbbc05')}}></div>
        <div className='color' onClick={() => {setColor('#34a853')}}></div>
    </div>
  )
}

export default Colores
