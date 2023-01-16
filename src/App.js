import React from 'react';

import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
