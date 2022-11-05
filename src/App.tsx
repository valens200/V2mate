import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './index.css'
import { useState } from 'react';
import { TextField } from '@material-ui/core';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages./Home';
function App() { 

const [cout , setCount ] = useState<String>("")

  return (
    <BrowserRouter >
    <Routes>
      <Route  path="/" element={<Home />}/>
    </Routes>    
    </BrowserRouter>
  );
}

export default App;
