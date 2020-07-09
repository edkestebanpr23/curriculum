import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router";

import NavBar from "./components/NavBar";

import Main from "./pages/Main";
import Project from "./pages/Project";

const App = () => {
  const [ilang, setIlang] = useState(0);

  useEffect(() => {
    let i = localStorage.getItem('ilang');
    setIlang(parseInt(i))
  }, []);

  return (
    <>
      <NavBar className='fixed-top' ilang={ilang} setIlang={setIlang} onSetIlang={(i) => {
        setIlang(i);
        localStorage.setItem('ilang', i);
      }} />
      <Routes>
        <Route path='/' element={<Main ilang={ilang} />} />
        <Route path='/projects' element={<Project ilang={ilang} />} />
      </Routes>
    </>
  );
}

export default App;
