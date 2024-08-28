import React from 'react'
import { useReducer, useState } from 'react'

const meses = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const currentTime = new Date();
const month = currentTime.getMonth();
const year = currentTime.getFullYear();
const valorInicial = { m: month, a: year };
let style = { color: 'white' }

const reducer = (state, action) => {
  let newState = null;
  switch (action.type) {
    case 'masM':
      newState = { m: (state.m + 1) % 12, a: state.a };
      break;
    case 'menosM':
      if (state.m == 0) {
        newState = { m: state.m + 11 , a: state.a };
        break;
      } else {
        newState = { m: (state.m - 1) % 12, a: state.a };
        break;
      }
    case 'masA':
      newState = { m: state.m, a: state.a + action.payload};
      break;
    case 'menosA':
      newState = { m: state.m, a: state.a - action.payload};
      break;
  }

  style = { ...style, filter: `brightness(${(newState.m / 12) + 0.5})`}

  if (year > newState.a || (year == newState.a && month > newState.m)) {
    style = { ...style, color: 'orange' }
  } else if (year < newState.a || (year == newState.a && month < newState.m)) {
    style = { ...style, color: 'cadetblue' }
  } else {
    style = { ...style, color: 'white' }
  }

  return newState;
}

const Calendario = () => {
  const [unidades, setUnidades] = useState(1)
  const [fecha, dispatch] = useReducer(reducer, valorInicial)
  return (
    <>
      <h1 style={ style }>{meses[fecha.m]} ({fecha.a})</h1>
      <div className='buttons'>
        <div className='meses'>
          <span>Meses: </span>
          <button onClick={() => dispatch({ type: 'menosM' })}>-</button>
          <button onClick={() => dispatch({ type: 'masM' })}>+</button>
        </div>
        <div className="anos">
          <span>Año: </span>
          <button onClick={() => dispatch({ type: 'menosA', payload: Number(unidades) })}>-</button>
          <input type="number" value={unidades} onChange={(e) => {setUnidades(e.target.value); console.log(unidades)}}/>
          <button onClick={() => dispatch({ type: 'masA', payload: Number(unidades)  })}>+</button>
        </div>
        
      </div>
    </>
  )
}

export default Calendario
