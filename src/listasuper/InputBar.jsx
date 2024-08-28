import React, { useContext, useState } from 'react'
import { Context } from './Context'


const InputBar = () => {

  const [item, setItem] = useState('');
  const {dispatch, errMsg, setErrMsg} = useContext(Context);

  const handleClick = () => {
    dispatch({ type: 'addItem', payload: String(item) })
    setItem('')
  }

  const handleChange = (e) => {
    setItem(e.target.value)
    if (errMsg) setErrMsg('')
  }

  return (
    <div className='input-bar'>
      <label htmlFor="input">Ingrese el nombre del producto</label>
      <input type="text" id='input' value={item} onChange={(e) => handleChange(e)} />
      <button onClick={handleClick}>AÑADIR</button>
      {errMsg.length > 0 && <p>{errMsg}</p>}
    </div>
  )
}

export default InputBar
