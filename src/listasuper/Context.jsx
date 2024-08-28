import React, { createContext, useReducer, useState } from "react";
import Swal from 'sweetalert2'

export const Context = createContext();
let mensaje = '';

const reducer = (state, action) => {

  let newState = state;

  switch (action.type) {
    case 'addItem':
      if (!state.find((elem) => elem.nombre == action.payload)) {
        newState = [...state, { nombre: action.payload, cantidad: 1 }];
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No puedes añadir el mismo producto dos veces",
        });
      }
      break;
    case 'increment':
      newState = state.map((elem) => {
        if (elem.nombre == action.payload) {
          return { nombre: elem.nombre, cantidad: elem.cantidad + 1 }
        } else {
          return elem
        }
      });
      break;
    case 'decrement':
      newState = state.map((elem) => {
        if (elem.nombre == action.payload && elem.cantidad > 1) {
          return { nombre: elem.nombre, cantidad: elem.cantidad - 1 }
        } else {
          return elem
        }
      });
      break;
    case 'removeItem':
      newState = state.filter((elem) => elem.nombre != action.payload)
  }

  return newState
}

export const Productos = ({ children }) => {
  const [productos, dispatch] = useReducer(reducer,[]);
  const [errMsg, setErrMsg] = useState('')

  return (
    <Context.Provider value={{ productos, dispatch, errMsg, setErrMsg }} >
      { children }
    </Context.Provider>
  )
} 