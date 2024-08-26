import React, { createContext } from "react";
import { useState } from "react";

export const Context = createContext();

export const TeacherData = ({ children }) => {
  const [datos, setDatos] = useState();
  const [showAddress, setShowAddress] = useState();
  const [showTeacher, setShowTeacher] = useState();

  return (
    <Context.Provider value={{ datos, setDatos, setShowAddress, setShowTeacher, showAddress, showTeacher }}>
        {children}
    </Context.Provider>
  );
};
