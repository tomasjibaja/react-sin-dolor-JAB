import imagen0 from './images/rey_atanagildo.png';
import imagen1 from './images/rey_sisebuto.png';
import './App.css';
import { useRef } from 'react';

function App() {
  const cambio = 23.16;
  const refCaja = useRef();
  const refKing = useRef();
  let rey = true;

  const handleClick = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (Number(e.target.innerHTML) > 7) {
      e.target.style.backgroundColor = "red";
    } 
    if (Number(e.target.innerHTML) > 9) {
      e.target.style.backgroundColor = "";
      e.target.innerHTML = 1;
    }
  }

  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
    refCaja.current.style.backgroundColor = 'orange';
  }

  const change = (j) => {
    if (rey) {
      j.target.src = imagen1;
    } else {
      j.target.src = imagen0;
    }
    rey = !rey;
  }

  const lectura = (e) => {
    refKing.current.innerHTML = e.target.value;
  }
 
  return (
    <div className='king-wrapper' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div ref={refCaja} className='caja' style={{ cursor: "pointer", width: '50%', textAlign: 'center' }} onClick={handleClick}>1</div>
      <button onClick={convertir}>Aceptar</button>
      <p ref={refKing} style={{ maxWidth: '200px', wordWrap: 'break-word' }}></p>
      <div>
        <img onClick={change} src={imagen0} />
      </div>
      
      <input onChange={lectura} className='campo' />
    </div>
  )
}

export default App
