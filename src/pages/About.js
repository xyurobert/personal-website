import React, { useRef } from 'react';
import styles from '../styles/skeleton.scss';
import Sidebar from '../components/Sidebar'
import { FaArrowRight } from "react-icons/fa";

function About() {
  const aboutRef = useRef(null);
  const booksRef = useRef(null);
  const projectsRef = useRef(null);
  const musicRef = useRef(null);

  const handleScrollToAbout = () => {
    let yOffset = -20;
    if(window.innerWidth < 900){
      yOffset = -180;
    }
    console.log(yOffset)
    const element = aboutRef.current;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    console.log(y)
    window.scrollTo({ top: y, behavior: 'smooth' });  };

  const handleScrollToProjects = () => {
    let yOffset = -20;
    if(window.innerWidth < 900){
      yOffset = -160;
    }
    const element = projectsRef.current;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
    window.scrollTo({ top: y, behavior: 'smooth' });  };

  const handleScrollToBooks = () => {
    let yOffset = -20;
    if(window.innerWidth < 900){
      yOffset = -160;
    }
    console.log(yOffset)
    const element = booksRef.current;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
    window.scrollTo({ top: y, behavior: 'smooth' });  };

  const handleScrollToMusic = () => {
    let yOffset = -20;
    if(window.innerWidth < 900){
      yOffset = -160;
    }
    const element = musicRef.current;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
    window.scrollTo({ top: y, behavior: 'smooth' });  };

  return (
    <div className="page-container">
      <Sidebar 
        handleScrollToAbout={handleScrollToAbout}
        handleScrollToProjects={handleScrollToProjects}
        handleScrollToBooks={handleScrollToBooks}
        handleScrollToMusic={handleScrollToMusic}
      />
      <div className='info-container'>

        <div className='about-container' ref={aboutRef}>
          <h2 className='hi'>Hello!</h2>
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

        <div className='projects-container' ref={projectsRef}>
          <h2>Projects</h2>
          <div className='projects'>
            <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/xyurobert/moco-hacks">
              <div className='project-container'>
                <div className='project-title'>
                 TweetAway <FaArrowRight className='arrow'/>
                </div>
                <p className='project-description'>
                  Website where users can access and delete any of their twitter posts that are flagged as NSFW or profane.
                </p>
                <div className='project-skills'>
                  Python • HTML • CSS
                </div>
              </div>
            </a>
            <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/xyurobert/Tic-Tac-Toe-AI">
              <div className='project-container'>
                <div className='project-title'>
                  Tic-Tac-Toe AI <FaArrowRight className='arrow'/>
                </div>
                <p className='project-description'>
                  Agent developed off of reinforcement learning algorithms and toolkits.
                </p>
                <div className='project-skills'>
                  Python • OpenAI Gym • Stable Baselines3
                </div>
              </div>
            </a>
            <a className='link' target="_blank" rel="noopener noreferrer" href="https://xyurobert.github.io/Sort-Visualizer/">
              <div className='project-container'>
                <div className='project-title'>
                  Sort Visualizer <FaArrowRight className='arrow'/>
                </div>
                <p className='project-description'>
                  Website that visualizes different sorting algorithms in the form of bars of different length
                </p>
                <div className='project-skills'>
                  JavaScript • HTML • CSS
                </div>
              </div>
            </a>
            <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/xyurobert/Financial-News-Sentiment-Analyzer">
              <div className='project-container'>
                  <div className='project-title'>
                    Sentiment Analyzer <FaArrowRight className='arrow'/>
                  </div>
                  <p className='project-description'>
                    Program that measures the sentiment of financial news headlines
                  </p>
                  <div className='project-skills'>
                    Python • NLTK
                </div>
              </div>
            </a>          
          </div>
        </div>

        <div className='books-container' ref={booksRef}>
          <h2>Books</h2>
          <li>Shoe Dog - Knight</li>
          <li>Principles - Dalio</li>
          <li>Sapiens - Harari</li>
          <li>Outliers - Gladwell</li>
          <li>The Power of Habit - Duhigg</li>
          <li>Thinking, Fast and Slow - Kahneman</li>
        </div>

        <div className='music-container' ref={musicRef}>
          <h2>Piano</h2>
          <div className='pianos-container'>
          <div>Currently working on: </div>
          <div className='piano-current'>
            <div>Chopin - Ballade no. 1 in G minor</div>
            <div>Debussy - Clair de lune</div>
          </div>
          
          <a className='link' target="_blank" rel="noopener noreferrer" href="https://youtu.be/HgnVzt5APOI">
              <div className='piano-container'>
                  <div className='project-title'>
                    Liszt - Un Sospiro <FaArrowRight className='arrow'/>
                  </div>
                  <div className='piano-info'>
                    <img className='thumbnail' src='https://i9.ytimg.com/vi_webp/HgnVzt5APOI/mq2.webp?sqp=CJyojaUG-oaymwEmCMACELQB8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVShEMA8=&rs=AOn4CLDY-bERUzczNytCi1oW5_ZIxBYs_Q'></img>
                    <div className='piano-year'>
                      2021
                    </div>
                  </div>
              </div>
          </a> 
          <a className='link' target="_blank" rel="noopener noreferrer" href="https://youtu.be/tRmv90OdB6k">
              <div className='piano-container'>
                  <div className='project-title'>
                    Debussy - Arabesque No. 1 <FaArrowRight className='arrow'/>
                  </div>
                  <div className='piano-info'>
                    <img className='thumbnail' src='https://i9.ytimg.com/vi_webp/tRmv90OdB6k/mq2.webp?sqp=CPCljaUG-oaymwEmCMACELQB8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgWyhOMA8=&rs=AOn4CLDl0gXPCpd6EmHU3wDxvb_ANVJZGw'></img>
                    <div className='piano-year'>
                      2021
                    </div>
                  </div>
              </div>
          </a> 
          <a className='link' target="_blank" rel="noopener noreferrer" href="https://youtu.be/awX8JkBLByc">
              <div className='piano-container'>
                  <div className='project-title'>
                    Mozart - Sonata No. 9 in D, K. 311 First Movement <FaArrowRight className='arrow'/>
                  </div>
                  <div className='piano-info'>
                    <img className='thumbnail' src='https://i9.ytimg.com/vi_webp/awX8JkBLByc/mq2.webp?sqp=CJyojaUG-oaymwEmCMACELQB8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgXShPMA8=&rs=AOn4CLBppZZ2PB9ty_UxWiAQ9G3L6gTJNw'></img>
                    <div className='piano-year'>
                      2021
                    </div>
                  </div>
              </div>
          </a> 
          <a className='link' target="_blank" rel="noopener noreferrer" href="https://youtu.be/gFTWEcGNcw4">
              <div className='piano-container'>
                  <div className='project-title'>
                    Du - The Dance of Watergrass <FaArrowRight className='arrow'/>
                  </div>
                  <div className='piano-info'>
                    <img className='thumbnail' src='https://i.ytimg.com/vi/gFTWEcGNcw4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2FGoT1Rf0oNmu_u7SkmdoNqG26w'></img>
                    <div className='piano-year'>
                      2020
                    </div>
                  </div>
              </div>
          </a> 
          <a className='link' target="_blank" rel="noopener noreferrer" href="https://youtu.be/VHqxtYL111M">
              <div className='piano-container'>
                  <div className='project-title'>
                    Agay - Little Rhapsody on Hungarian Themes <FaArrowRight className='arrow'/>
                  </div>
                  <div className='piano-info'>
                    <img className='thumbnail' src='https://i.ytimg.com/vi/VHqxtYL111M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABjEKUFHcHAbrak4JA2KN8-_K1KA'></img>
                    <div className='piano-year'>
                      2015
                    </div>
                  </div>
              </div>
            </a>         
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;