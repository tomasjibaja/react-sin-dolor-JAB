import React from 'react'
import './App7.css'
import Pagina1 from './components/Pagina1'
import Colores from './components/Colores'
import { Datos } from './context/Context'

const App7 = () => {
  return (
    <>
    <Datos>
      <div className='container'>
        <Pagina1 />
        <Pagina1 />
        <Pagina1 />
      </div>
      <Colores />    
    </Datos>
    </>
  )
}

export default App7
