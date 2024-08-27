import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './portfolio/Home'
import Error404 from './portfolio/Error404'
import App4 from './App4'
import App5 from './App5'
import App6 from './App6'
import App6b from './App6b'
import App7teacher from './App7teacher'
import AppRobogen from './App(RoboGen)'
import './Portfolio.css'
import Nav from './portfolio/Nav'

const Portfolio = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/4' element={<App4 />} />
        <Route path='/5' element={<App5 />} />
        <Route path='/6' element={<App6 />} />
        <Route path='/6b' element={<App6b />} />
        <Route path='/7teacher' element={<App7teacher />} />
        <Route path='/robogen' element={<AppRobogen />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Portfolio
