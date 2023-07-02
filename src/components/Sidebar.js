import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/skeleton.scss';
import links from '../styles/links.scss'
import { FaLinkedin, FaGithub, FaGoodreads } from "react-icons/fa";
import { SiGmail } from "react-icons/si"

function Sidebar() {

  const location = useLocation();
  const isAbout = location.pathname === '/'
  const isProject = location.pathname === '/projects'
  const isReading = location.pathname === '/reading'
  const isMusic = location.pathname === '/music'

  return (
    <div className='sidebar'>
      <h1 className='name'>
        <a className='name' href="/">Robert Xu</a>
      </h1>
      <div className='links'>
        <h4 className='link' style={{ margin: '5px 0' }}>
          <a className={isAbout ? 'current' : ''} href="/">about</a>
        </h4>
        <h4 style={{ margin: '5px 0' }}>
          <a className={isProject ? 'current' : ''} href="/#/projects">projects</a>
        </h4>
        <h4 style={{ margin: '5px 0' }}>
          <a className={isReading ? 'current' : ''} href="/#/reading">reading</a>
        </h4>
        <h4 style={{ margin: '5px 0' }}>
          <a className={isMusic ? 'current' : ''} href="/#/music">music</a>
        </h4>
      </div>

      <div className='socials'>
        <div style={{ margin: '3px 0' }}>
          <a className='linkedin' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/xyurobert/">
            <FaLinkedin size={22}/>
          </a>
        </div>
        <div className='icon' style={{ margin: '3px 0' }}>
          <a className='github' target="_blank" rel="noopener noreferrer" href="https://github.com/xyurobert">
            <FaGithub size={22}/>
          </a>
        </div>
        <div className='icon' style={{ margin: '3px 0' }}>
          <a className='email' target="_blank" rel="noopener noreferrer" href="mailto: xyu.robert@gmail.com">
            <SiGmail size={22}/>
          </a>
        </div>
        <div className='icon' style={{ margin: '3px 0' }}>
          <a className='goodreads' target="_blank" rel="noopener noreferrer" href="https://www.goodreads.com/user/show/137275353-robert">
            <FaGoodreads size={23}/>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Sidebar;