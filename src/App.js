import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Main from './pages/Main';
import TerpCalPage from './components/TerpCalPage.js';
import TerpCalPolicy from './components/TerpCalPolicy.js'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <HashRouter>
      <Helmet>
        <title>Robert Xu</title>
        <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/4311/4311197.png" />
      </Helmet>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/terpcal" element={<TerpCalPage />} />
          <Route path="/terpcal/policy" element={<TerpCalPolicy />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
