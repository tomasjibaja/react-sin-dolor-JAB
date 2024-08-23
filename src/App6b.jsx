import React from 'react'
import './App6b.css'
import { useEffect, useState, useRef } from 'react'
import CNFact from './components/CNFact'

const App6b = () => {

  const [data, setData] = useState()
  const [list, setList] = useState([])
  const [shortSearch, setShortSearch] = useState(false)
  const input = useRef()

  const getJoke = () => {
    document.querySelector('q').style.opacity = '0'
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(res => setData(res))
    .then(() => document.querySelector('q').style.opacity = '1')  
    .catch((err) => console.log(err))  
  }

  const searchJokes = () => {
    if (input.current.value.length < 3) {
      setShortSearch(true)
      setList([])
    } else {
      setShortSearch(false)
      document.querySelector('.search-container').style.opacity = '0'
      fetch(`https://api.chucknorris.io/jokes/search?query=${input.current.value}`)
      .then(res => res.json())
      .then(res => setList(res.result))
      .then(() => document.querySelector('.search-container').style.opacity = '1')
      .catch((err) => console.log(err)) 
    }

  }

  useEffect(() => {
    getJoke()
  },[])

  return (
    <>
      <h2>Chuck Norris wanted you to read this...</h2>
      <div className='joke-container'>
        {data == undefined && 'Loading... '}
        <img src={data?.icon_url} alt="Chuck Norris" />
        <q>{data?.value}</q>
      </div>
      <button onClick={getJoke}>new fact</button>
      <hr style={{ width: '30vw' }} />
      <input ref={input} type="text" minLength={3}/>
      <button onClick={searchJokes}>search facts</button>
      <div className='search-container'>
        {shortSearch && <h4>search must be at least 3 characters long</h4>}
        {list?.length > 0 && <h4>found <strong>{list?.length}</strong> fact{list?.length > 1 && 's'} regarding <span style={{ color: 'darkgoldenrod'}}>'{input.current.value}'</span></h4>}
        {list?.length == 0 && input.current?.value.length != 0 && <h4>Chuck Norris denied us to show you facts about <span style={{ color: 'darkgoldenrod' }}>'{input.current?.value}'</span></h4>}
        {list?.map((elem, index) => {
          return (
            <CNFact key={index} data={elem} id={index} />
          )
        })}
      </div>

    </>
    
  )
}

export default App6b
