import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './component/pages/Home';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      {/* <CostcoProvider> */}
        <BrowserRouter>
          <Routes>
            {/* {isLoggedIn ? (
              <Route path='/dashboard' element={<Dashboard />} />
            ) : (
              <Route path='/' element={<Signin />} />
            )} */}
            <Route path='/' element={<Home/>} />
            {/* <Route path='/cry' element={<Cry />} /> */}
          </Routes>
        </BrowserRouter>
      {/* </CostcoProvider> */}
    </div>
  );
}

export default App;
