import React, { useContext, useEffect } from 'react'
import spa from '../spain.jpg'
import eng from '../uk.png'
import fra from '../francia.png'
import { valores } from '../valores'
import { Context } from '../context/Context'

const Langs = () => {

  const {setDatos} = useContext(Context)

  useEffect(() => {
    setDatos(valores[0])
  },[])

  const setSpa = () => {
    setDatos(valores[0])
  }

  const setEng = () => {
    setDatos(valores[1])
  }

  const setFra = () => {
    setDatos(valores[2])
  }

  return (
      <div className="langs">
        <img onClick={setSpa} src={spa} alt="flag" className="lang" />
        <img onClick={setEng} src={eng} alt="flag" className="lang" />
        <img onClick={setFra} src={fra} alt="flag" className="lang" />
      </div>
  )
}

export default Langs
