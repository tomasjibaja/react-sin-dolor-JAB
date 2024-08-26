import React, { useContext } from 'react'
import Teacher from './Teacher'
import Address from './Address'
import { Context } from '../context/Context'

const LangContent = () => {

  const {datos, showTeacher, setShowTeacher, showAddress, setShowAddress} = useContext(Context)

  const handleTeacher = () => {
    setShowAddress(false)
    setShowTeacher(true)

  }

  const handleAddress = () => {
    setShowTeacher(false)
    setShowAddress(true)

  }

  return (
    <>
      <div className="title">
        <h2>{datos?.titulo}</h2>
        <h3>{datos?.texto}</h3>
      </div>
      <div className="info-wrapper">
        <div className="button-wrapper">
          <button onClick={handleTeacher}>{datos?.boton1}</button>
          <button onClick={handleAddress}>{datos?.boton2}</button>
        </div>
        {showTeacher && <Teacher />}
        {showAddress && <Address />}
      </div>
      
    </>
  )
}

export default LangContent
