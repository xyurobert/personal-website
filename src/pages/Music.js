import React from 'react';
import styles from '../styles/skeleton.scss';
import Sidebar from '../components/Sidebar';

function Music() {
  return (
    <div className="container">
      <Sidebar />
      <div className='info'>
        <h2>Piano</h2>
        <p>[work in progress]</p>
      </div>
    </div>
  );
}

export default Music;