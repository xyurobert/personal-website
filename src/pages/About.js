import React from 'react';
import styles from '../styles/style.scss';
import Sidebar from '../components/Sidebar'
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <div className="container">
      <Sidebar />
      <div className='info'>
        <h2>Hi!</h2>
        <div className='about'>
          <p>
            I'm a CS + Math rising sophomore @ University of Maryland, College Park. I love building things and expanding my knowledge wherever I go. 
          </p>
          <p>
            Currently, I'm a SWE intern at&nbsp;
            <a className='link' target="_blank" rel="noopener noreferrer" href='https://www.haylontech.com/'>Haylon Technologies <FaArrowRight className='arrow'/></a> 
            &nbsp;&nbsp;working backend and&nbsp;
            <a className='link' target="_blank" rel="noopener noreferrer" href='https://www.ticker.fund/'>Ticker Markets <FaArrowRight className='arrow'/></a> 
            &nbsp;&nbsp;working frontend. Previously, I was a research intern at UMD, studying the applications of NLP and reinforcement learning.
          </p>
          <p>
            When I'm not at my computer, you can find me playing the piano, playing tennis with friends, or enjoying a good read.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;