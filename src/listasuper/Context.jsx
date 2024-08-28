import React, { createContext, useState } from "react";

export const Context = createContext();

export const Productos = ({ children }) => {
  const [items, setItems] = useState([
    {
      nombre: 'Sarlanga',
      cantidad: 3
    },
    {
      nombre: 'Farofa',
      cantidad: 8
    },
    {
      nombre: 'Farofol',
      cantidad: 123
    },
  ])

  return (
    <Context.Provider value={{ items, setItems }} >
      { children }
    </Context.Provider>
  )
} 