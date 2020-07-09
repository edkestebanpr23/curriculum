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
      <div>
        <div className='row'>
          <NavBar ilang={ilang} setIlang={setIlang} onSetIlang={(i) => {
            setIlang(i);
            localStorage.setItem('ilang', i);
          }} />
        </div>
        <div className='row'>
          <Routes>
            <Route path='/' element={<Main ilang={ilang} />} />
            <Route path='/projects' element={<Project ilang={ilang} />} />
          </Routes>
        </div>

      </div>
    </>
  );
}

export default App;
