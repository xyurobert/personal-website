import React from 'react'
import { BrowserRouter as Router, Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import './App.scss';
import About from './pages/About';
import Projects from './pages/Projects';
import Reading from './pages/Reading';
import Music from './pages/Music';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<About/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/reading" element = {<Reading/>} />
          <Route exact path="/music" element = {<Music/>} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
