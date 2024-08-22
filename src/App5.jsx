import React from 'react'
import KingEaterCard from './components/KingEaterCard'
import Kin from './components/Kin'
import './App5.css'
import { useState, useEffect, useRef } from 'react'

const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataulfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leogivildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]

const App5 = () => {

  const [inicial, setInicial] = useState('A')

  const inputVocal = useRef()

  let reyE = reyes.find((elem) => (elem.nombre[0] == inicial))

  const changeInicial = (e) => {
    setInicial(e.target.innerHTML)
    Array.from(document.querySelectorAll('.vocal')).map(elem => elem.style.color = 'inherit')
    e.target.style.color = 'darkcyan'
  }

  const buscarLetra = () => {
    setInicial(inputVocal.current.value.toUpperCase())
    Array.from(document.querySelectorAll('.vocal')).map(elem => elem.style.color = 'inherit')
    inputVocal.current.value = ''
  }

  useEffect(() => {
  reyE = reyes.find((elem) => (elem.nombre[0] == inicial));
  },[inicial])

  return (
    <>
      <h2>Actividad 1:</h2>
      <div className="king-container">
        {reyes.map((elem, index) => {
          return (
            <KingEaterCard
              key={index}
              nombre={elem.nombre}
              vacasComidas={elem.vacasComidas}
              reinado={elem.reinado}
            />
          );
        })}
      </div>
      <h2 style={{ marginBottom: "0" }}>Actividad 2:</h2>
      <h5 style={{ marginTop: "0" }}>(Reyes sin G)</h5>
      <div className="kin-container">
        {reyes.map((elem, index) => {
          if (!elem.nombre.includes("g")) {
            return <Kin nombre={elem.nombre} key={index} />;
          }
        })}
      </div>
      <h2 style={{ marginBottom: "0" }}>Actividad 3:</h2>
      <h3 className='vocales' style={{ margin: "0" }}>
        <span className='vocal' onClick={changeInicial}>A</span>
        <span className='vocal' onClick={changeInicial}>E</span>
        <span className='vocal' onClick={changeInicial}>I</span>
        <span className='vocal' onClick={changeInicial}>O</span>
        <span className='vocal' onClick={changeInicial}>U</span>
      </h3>
      <div className='sumar-letra'>
        <input ref={inputVocal} type="text" maxLength={1}/>
        <button onClick={buscarLetra}>Buscar letra</button>
      </div>
      <h5 style={{ marginTop: "0" }}>(Primer rey que empiece con {inicial})</h5>
      <p style={{ marginTop: "0", color: 'darkcyan', fontSize: '36px' }}>{reyE != undefined ? reyE.nombre : `No se ha encontrado un rey que empiece con ${inicial}.`}</p>
      <h2 style={{ marginBottom: "0" }}>Actividad 4:</h2>
      <h5 style={{ marginTop: "0" }}>(Contador de vacas y reinados)</h5>
    </>
  );
}

export default App5
