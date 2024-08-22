import React from 'react'
import './App6b.css'
import { useEffect, useState } from 'react'

const App6b = () => {

  const [data, setData] = useState()

  const getJoke = () => {
    document.querySelector('q').style.opacity = '0'
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(res => setData(res))
    .then(() => document.querySelector('q').style.opacity = '1')  
    .catch((err) => console.log(err))  
  }

  useEffect(() => {
    getJoke()
    document.querySelector('.joke-container').style.opacity = '1'
  },[])

  return (
    <>
      <div className='joke-container'>
        {data == undefined && 'Loading... '}
        <img src={data?.icon_url} alt="Chuck Norris" />
        <q>{data?.value}</q>
      </div>
      <button onClick={getJoke}>new fact</button>
    </>
    
  )
}

export default App6b
