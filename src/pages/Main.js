import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from '../styles/skeleton.scss';
import Sidebar from '../components/Sidebar'
import Projects from '../components/Projects'
import About from '../components/About'
import Reading from '../components/Reading'
import Piano from '../components/Piano'
import TerpCalPage from '../components/TerpCalPage'; 

function Main() {
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
          <Routes>
            <Route path="/terpcal" element={<TerpCalPage />} />
            <Route path="/" element={
              <>
                <div ref={aboutRef}><About /></div>
                <div ref={projectsRef}><Projects /></div>
                <div ref={booksRef}><Reading /></div>
                <div ref={musicRef}><Piano /></div>
              </>
            } />
          </Routes>
        </div>
      </div>
    );
}

export default Main;