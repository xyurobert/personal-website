import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/skeleton.scss';
import Sidebar from '../components/Sidebar';
import { FaArrowRight } from "react-icons/fa";
import links from '../styles/links.scss'

function Projects() {
  return (
    <div className="container">
      <Sidebar />
      <div className='info'>
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
    </div>
  );
}

export default Projects;