import React from 'react'
import './ListaSuper.css'
import InputBar from './listasuper/InputBar'
import Items from './listasuper/Items.jsx'
import { Productos } from './listasuper/Context.jsx'

const ListaSuper = () => {
  return (
    <Productos>
      <InputBar />
      <Items />
    </Productos>
  )
}

export default ListaSuper
