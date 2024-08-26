import React from 'react'
import { useParams } from 'react-router-dom'

const D = () => {
    const dato = useParams()
  return (
    <div>
      <h1>{dato.letra}</h1>
    </div>
  )
}

export default D
