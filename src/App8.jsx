import React from "react";
import A from './paginas/A'
import B from './paginas/B'
import C from './paginas/C'
import D from './paginas/D'
import Chuck from './App6b'
import Robogen from './App(RoboGen)'
import Error404 from './paginas/Error404'
import Nav from './paginas/Nav'
import "./App8.css";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

const App8 = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<A/>} />
        <Route path='/pagina2' element={<B/>} />
        <Route path='/pagina3' element={<C/>} />
        <Route path='/pagina4/:letra' element={<D/>} />
        <Route path='/pagina1' element={<Navigate to='/'/>}/>
        <Route path='/chuck' element={<Chuck />} />
        <Route path='/robogen' element={<Robogen />} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App8;
