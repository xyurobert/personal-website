import React, { useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Projects() {

  return (
    
    <div className='projects-container' >
    <h2>Projects</h2>
    <div className='projects'>
    <a className='link' target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/silk-6nhgiy">
        <div className='project-container'>
          <div className='project-title'>
            Silk <FaArrowRight className='arrow'/>
          </div>
          <p className='project-description'>
            Google Gemini-powered platform that finds cheaper international prices for products and connects buyers with travelers to facilitate smart, cost-saving purchases.          
          </p>
          <div className='project-data'>
            <div className='project-skills'>
              Gemini API, Supabase, Express.js, React
            </div>
            <div className='project-date'>
              Apr 2025
            </div>
          </div>
        </div>
      </a> 
      <a className='link' target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/polygone">
        <div className='project-container'>
          <div className='project-title'>
            PolyGone <FaArrowRight className='arrow'/>
          </div>
          <p className='project-description'>
            Geolocation tracking app for real-time monitoring of target devices and direct them back to you. Won best Social Good Hack at Bitcamp 2024
          </p>
          <div className='project-data'>
            <div className='project-skills'>
              React/React Native • HTML • CSS • Google Maps API
            </div>
            <div className='project-date'>
              Apr 2024
            </div>
          </div>
        </div>
      </a> 
      <Link to="/terpcal" className='link'>
        <div className='project-container'>
          <div className='project-title'>
            TerpCal <FaArrowRight className='arrow'/>
          </div>
          <p className='project-description'>
            Chrome extension that allows University of Maryland Students to sync their schedules with their Google Calendar
          </p>
          <div className='project-data'>
            <div className='project-skills'>
              JavaScript • OAuth2 • Google Calendar API
            </div>
            <div className='project-date'>
              Jan 2024
            </div>
          </div>
        </div>
      </Link>  
      <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/xyurobert/Tic-Tac-Toe-AI">
        <div className='project-container'>
          <div className='project-title'>
            RL Tic-Tac-Toe Agent <FaArrowRight className='arrow'/>
          </div>
          <p className='project-description'>
            Agent developed off of reinforcement learning algorithms and toolkits.
          </p>
          <div className='project-data'>
            <div className='project-skills'>
              Python • OpenAI Gym • Stable Baselines3
            </div>
            <div className='project-date'>
              Aug 2022
            </div>
          </div>
        </div>
      </a>
      <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/xyurobert/Financial-News-Sentiment-Analyzer">
        <div className='project-container'>
            <div className='project-title'>
              Financial News Sentiment Analyzer <FaArrowRight className='arrow'/>
            </div>
            <p className='project-description'>
              Program that measures the sentiment of financial news headlines
            </p>
            <div className='project-data'>
              <div className='project-skills'>
                Python • NLTK
              </div>
              <div className='project-date'>
                Jun 2022
              </div>
            </div>
        </div>
      </a>   
      <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/xyurobert/moco-hacks">
        <div className='project-container'>
          <div className='project-title'>
           TweetAway <FaArrowRight className='arrow'/>
          </div>
          <p className='project-description'>
            Website where users can access and delete any of their twitter posts that are flagged as NSFW or profane.
          </p>
          <div className='project-data'>
            <div className='project-skills'>
              Python • HTML • CSS
            </div>
            <div className='project-date'>
              Oct 2021
            </div>
          </div>
        </div>
      </a>    
    </div>
  </div>
  )
}

export default Projects;