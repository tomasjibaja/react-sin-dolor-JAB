import React, { useContext } from 'react'
import { Context } from './Context'

const Item = ({ props }) => {

  const {dispatch} = useContext(Context)
  
  // const handleRemove = () => {
  //   const newArray = items.filter((elem) => elem.nombre != props.nombre);
  //   setItems(newArray);
  // }

  // const handleIncrement = () => {
  //   const newArray = items.map((elem) => {
  //     if (elem.nombre == props.nombre) {
  //        return { nombre: elem.nombre, cantidad: props.cantidad + 1 }
  //     } else {
  //        return elem
  //     }
  //   })
  //   setItems(newArray)
  // };

  // const handleDecrement = () => {
  //   const newArray = items.map((elem) => {
  //     let cantidad = (props.cantidad > 1 ? props.cantidad : 2)
  //     if (elem.nombre == props.nombre) {
  //        return { nombre: elem.nombre, cantidad: cantidad - 1 }
  //     } else {
  //        return elem
  //     }
  //   })
  //   setItems(newArray)
  // };
 
  return (
    <div className='item'>
      <h2>{props.nombre}</h2>
      <div className="control">
        <button onClick={() => dispatch({ type: 'decrement', payload: String(props.nombre) })}>-</button>
        <span>{props.cantidad}</span>
        <button onClick={() => dispatch({ type: 'increment', payload: String(props.nombre) })}>+</button>
        <button onClick={() => dispatch({ type: 'removeItem', payload: String(props.nombre) })}>&#10005;</button>
      </div>
    </div>
  )
}

export default Item
