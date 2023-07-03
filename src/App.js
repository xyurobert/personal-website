import React from 'react'
import { BrowserRouter as Router, Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import './App.scss';
import About from './pages/About';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<About/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
