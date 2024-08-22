import React from 'react'
import { useRef, useState } from 'react'
import './App.css';
import rey1 from './images/rey_ataulfo.png'
import rey2 from './images/rey_recesvinto.png'
import rey3 from './images/rey_teodorico.png'

const reyesGodos = [
  {
    nombre: 'Ataúlfo',
    aficion: 'comer toros sin pelar',
    img: rey1
  },
  {
    nombre: 'Recesvinto',
    aficion: 'leer a Hegel en arameo',
    img: rey2
  },
  {
    nombre: 'Teodorico',
    aficion: 'la cría del escarabajo en almíbar',
    img: rey3
  }
]

const monedas = [
  {
    moneda: 'euro',
    cambio: 1
  },
  {
    moneda: 'peso',
    cambio: 118.6
  },
  {
    moneda: 'peso-c',
    cambio: 4543.5
  },
  {
    moneda: 'peso-m',
    cambio: 23.2
  },
  {
    moneda: 'dolar',
    cambio: 1.14
  },
]

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [res, setRes] = useState('');
  const [index, setIndex] = useState(0);
  const [changeReq, setChangeReq] = useState();

  const sumar = () => {
    if (num1 != undefined && num2 != undefined) {
      setRes(Number(num1) + Number(num2));
    }
  }

  const updateNum1 = (e) => {
    setNum1(e.target.value);
  }

  const updateNum2 = (e) => {
    setNum2(e.target.value);
  }

  const kingCycling = () => {
    setIndex((index + 1) % 3)
  }

  const handleReqChange = (e) => {
    setChangeReq(e.target.value)
  }
 
  return (
    <>
      <div className='datos-kings' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
        <button onClick={kingCycling} style={{ width: '120px', color: 'white' }}>Siguiente</button>
        <img src={reyesGodos[index].img} alt="rey" style={{ width: '100px', marginTop: '25px' }} />
        <h2>La afición principal de <strong style={{ color: 'red' }}>{reyesGodos[index].nombre}</strong> es <span style={{ color: 'green' }}>{reyesGodos[index].aficion}</span></h2>
      </div>
      
      <div className='conversor' style={{ width: '100vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', margin: '100px auto' }}>
        <div className='coin-wrapper'>
          <label htmlFor="euro">Euro</label>
          <input id='euro' type="number" onChange={handleReqChange}/>
        </div>
        <div className="coin-wrapper">
          <label htmlFor="peso">Peso</label>
          <input id='peso' className='res' value={(changeReq * monedas[1].cambio).toFixed(2)} type="number" readOnly/>
        </div>
        <div className="coin-wrapper">
          <label htmlFor="peso-c">Peso Colombiano</label>
          <input id='peso-c' className='res' value={(changeReq * monedas[2].cambio).toFixed(2)} type="number" readOnly/>
        </div>
        <div className="coin-wrapper">
          <label htmlFor="peso-m">Peso Mexicano</label>
          <input id='peso-m' className='res' value={(changeReq * monedas[3].cambio).toFixed(2)} type="number" readOnly/>
        </div>
        <div className="coin-wrapper">
          <label htmlFor="dolar">Dólar</label>
          <input id='dolar' className='res' value={(changeReq * monedas[4].cambio).toFixed(2)} type="number" readOnly/>
        </div>
      </div>

      <div className='caja'>
        <input type="number" onChange={updateNum1}/> +
        <input type="number" onChange={updateNum2}/> =
        <input className='res' type="number" value={res} readOnly/>
        <button onClick={sumar}>SUMAR</button>
      </div>
    </>
    
  )
}

export default App
