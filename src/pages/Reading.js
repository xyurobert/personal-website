import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/style.scss';
import Sidebar from '../components/Sidebar';

function Reading() {
  return (
    <div className="container">
      <Sidebar />
      <div className='info'>
        <h2>Books</h2>
        <li>Shoe Dog - Knight</li>
        <li>Principles - Dalio</li>
        <li>Sapiens - Harari</li>
        <li>Outliers - Gladwell</li>
        <li>The Power of Habit - Duhigg</li>
        <li>Thinking, Fast and Slow - Kahneman</li>
      </div>
    </div>
  );
}

export default Reading;