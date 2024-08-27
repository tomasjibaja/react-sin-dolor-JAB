import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './kingnav/Nav'
import King from './kingnav/King'
import Home from './kingnav/Home'
import './App8KingNav.css'
import { kings } from './kingnav/kings'
import KingParams from './kingnav/KingParams'

const App8KingNav = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/:rey'} element={<KingParams />} /> 

        {/* Sin el uso de useParams 
        {kings.map((elem, index) => {
          return (
            <Route key={index} path={`/${elem.nombre}`} element={<King props={elem} />} />
          )
        })} */}
      </Routes>
    </BrowserRouter>
  )
}

export default App8KingNav
