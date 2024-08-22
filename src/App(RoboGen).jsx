import React from 'react'
import { useRef, useState } from 'react'

const vocals = ['a', 'e', 'i', 'o', 'u']
const conso = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

const App = () => {
  const nom = useRef()
  const pic = useRef()
  const [nick, setNick] = useState()

  const cambiarNombre = () => {
    nom.current.innerHTML = 
      conso[Math.floor(Math.random() * 21)].toUpperCase() + 
      vocals[Math.floor(Math.random() * 5)] +
      conso[Math.floor(Math.random() * 21)];
    setNick(nom.current.innerHTML);
    pic.current.style.opacity = '1';
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '50vw', margin: 'auto' }}>
      <img ref={pic} src={`https://robohash.org/${nick}.png`} style={{ transition: 'all .7s ease-in-out', opacity: '0' }}></img>
      <h3>Te llamas <span ref={nom} style={{ color: 'orangered', fontWeight: '700' }}>_____</span></h3>
      <button onClick={cambiarNombre}>Generar personaje</button>
    </div>
  )
}

export default App
