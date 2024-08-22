import React from 'react'
import { useState, useEffect } from 'react'
import './App4.css'
import ReyGodo from './components/ReyGodo'
import ReyItem from './components/ReyItem'

const reyes = [
  {
    nombre: "Atanagildo",
    color: "darkolivegreen",
    precio:178
  },
  {
    nombre:"Ervigio",
    color: "crimson",
    precio: 169
  },
  {
    nombre: "Ataulfo",
    color: "peru",
    precio: 81
  },
  {
    nombre: "Leogivildo",
    color: "darkmagenta",
    precio:126
  },
  {
    nombre: "Recesvinto",
    color: "royalblue",
    precio: 141
  },
  {
    nombre: "Sisebuto",
    color: "teal",
    precio: 69
  }
]

const App = () => {
  const [total, setTotal] = useState(0)
  const [detalle, setDetalle] = useState([])
  const [detalleDisplay, setDetalleDisplay] = useState(true)

  const buy = ( precio, nombre ) => {
    setTotal(total + precio)
    setDetalle([
      ...detalle, 
      {
      nombre: nombre,
      precio: precio
      }
    ])
  }

  const removeItem = ( nombre, precio) => {
    setTotal(total - precio)
    setDetalle(elem => elem.filter(king => king.nombre !== nombre))
  }

  const hideDetalle = () => {
    setDetalleDisplay(false)
    document.querySelector('.detalle').style.height = '30px'
  }

  const showDetalle = () => {
    setDetalleDisplay(true)
    document.querySelector('.detalle').style.height = `${(60 * detalle.length) + 20}px`
  }

  useEffect(() => {
    if (detalleDisplay) document.querySelector('.detalle').style.height = `${(60 * detalle.length) + 20}px`
  }, [detalle])

  return (
    <>
      <div>
        <h1>Total a pagar: ${total}</h1>
        <div className='detalle'>
          {(detalle.length > 0) 
            && <h4 style={{ margin: '0', fontWeight: '200' }}>
              Detalle {detalleDisplay ? 
                <span onClick={hideDetalle}>&#9650;</span> : 
                <span onClick={showDetalle}>&#9660;</span>}
              </h4>}
          {detalle.map((elem, index) => {
              return (
              <ReyItem key={index} index={index} props={elem} removeItem={removeItem} />
              )
            })
          }
        </div>
      </div>
      <div className='kings-container'>
        {
          reyes.map((elem, key) => {
            return (
              <ReyGodo props={elem} key={key} buy={buy} />
            )
          })
        }
      </div>
    </>
    
  )
}

export default App
