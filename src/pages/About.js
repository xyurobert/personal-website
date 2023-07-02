import React from 'react';
import styles from '../styles/skeleton.scss';
import Sidebar from '../components/Sidebar'
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <div className="page-container">
      <Sidebar />
      <div className='info-container'>

        <div className='about-container'>
          <h2 className='hi'>Hi!</h2>
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

        <div className='project-container'>
          <h2>Projects</h2>
          <div className='projects'>
            <h4>
              <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/xyurobert/moco-hacks">
                TweetAway <FaArrowRight className='arrow'/>
              </a>
            </h4>
            <h4>
              <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/xyurobert/Tic-Tac-Toe-AI">
                Tic-Tac-Toe AI <FaArrowRight className='arrow'/>
              </a>
            </h4>
            <h4>
              <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/xyurobert/Sort-Visualizer">
                Sort Visualizer <FaArrowRight className='arrow'/>
              </a>
            </h4>
            <h4>
              <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/xyurobert/Financial-News-Sentiment-Analyzer">
                Sentiment Analyzer <FaArrowRight className='arrow'/>
              </a>
            </h4>
          </div>
        </div>

        <div className='books-container'>
          <h2>Books</h2>
          <li>Shoe Dog - Knight</li>
          <li>Principles - Dalio</li>
          <li>Sapiens - Harari</li>
          <li>Outliers - Gladwell</li>
          <li>The Power of Habit - Duhigg</li>
          <li>Thinking, Fast and Slow - Kahneman</li>
        </div>

        <div className='music-container'>
          <h2>Piano</h2>
          <p>[work in progress]</p>
        </div>
      </div>
    </div>
  );
}

export default About;