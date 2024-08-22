import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './App6.css'

const App6 = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api?results=3')
    .then(res => res.json())
    .then(res => setUsers(res.results))
  },[])

  return (
    <div className='premiados'>
      <h1>Premiados:</h1>
      {users.length < 1 && 'Cargando usuarios...'}
      {users.map((elem, index) => {
        return (
          <div className='usuario' key={index}>
            <div className="usuario-info">
              <h3>{elem.name.first} {elem.name.last}</h3>
              <h4>GENDER</h4>
              <h5>{elem.gender}</h5>
              <h4>ADDRESS</h4>
              <h5>{elem.location.street.number} {elem.location.street.name}</h5>
              <h6>{elem.location.city} - {elem.location.state} - {elem.location.country}</h6>
              <h4>DATE OF BIRTH</h4>
              <h5>{elem.dob.date.slice(0,10)} <span>({elem.dob.age} years)</span></h5>
            </div>
            <div className="usuario-pic">
              <img src={elem.picture.large} alt="" />
              <h5><span>ID</span> {elem.id.value}</h5>
            </div>
          </div>
        )
        
      })}
    </div>
  )
}

export default App6
