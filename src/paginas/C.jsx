import React from 'react'
import { Link } from 'react-router-dom'

const C = () => {
  return (
    <div>
      <h1>C</h1>
      <Link to='/chuck'>Ir a Chuck Norris Facts</Link>
      <br />
      <Link to='/robogen'>Ir a Robot Generator</Link>
    </div>
  )
}

export default C
