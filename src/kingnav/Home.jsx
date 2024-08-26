import React from 'react'
import { kings } from './kings'
import King from './King'

const Home = () => {
  return (
    <div className='home'>
      <h1>Home</h1>
      <div className="kings-wrapper">
        {kings.map((elem, index) => {
            return (
                <King key={index} props={elem} small/>
            )
        })}
      </div>
    </div>
  )
}

export default Home
