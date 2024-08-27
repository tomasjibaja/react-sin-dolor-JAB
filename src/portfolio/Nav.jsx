import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/4'}>CardBuyer</NavLink>
        <NavLink to={'/5'}>map y search</NavLink>
        <NavLink to={'/6'}>Empleados</NavLink>
        <NavLink to={'/6b'}>ChuckNorris</NavLink>
        <NavLink to={'/7teacher'}>Idiomas</NavLink>
        <NavLink to={'/robogen'}>RoboGen</NavLink>
    </nav>
  )
}

export default Nav
