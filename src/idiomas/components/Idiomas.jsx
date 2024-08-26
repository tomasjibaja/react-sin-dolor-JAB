import React from 'react'
import Langs from './Langs'
import LangContent from './LangContent'
import { TeacherData } from '../context/Context'

export const Idiomas = () => {

  return (
    <div className="wrapper">
      <TeacherData >
        <Langs />
        <LangContent />
      </TeacherData>
    </div>
  )
}

export default Idiomas
