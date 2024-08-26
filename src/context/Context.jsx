import React, { createContext, useState } from 'react'

export const Context = createContext()

export const Datos = ({ children }) => {
    const [color, setColor] = useState()
    return (
        <Context.Provider value={{ color, setColor }}>
            {children}
        </Context.Provider>
    )
}