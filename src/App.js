import React from 'react'
import { BrowserRouter as Router, Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import './App.scss';
import Main from './pages/Main';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <HashRouter>
      <Helmet>
        <title>Robert Xu</title>
        <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/4311/4311197.png"/>
      </Helmet>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
