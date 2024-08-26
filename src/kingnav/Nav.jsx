import { NavLink } from 'react-router-dom'
import React from 'react'
import { kings } from './kings'

const Nav = () => {
  return (
    <nav>
      <NavLink to={'/'} >home</NavLink>
      {kings.map((elem, index) => {
        return (
          <NavLink key={index} to={`/${elem.nombre}`}>{elem.nombre}</NavLink>
        )
      })}
    </nav>
  )
}

export default Nav
