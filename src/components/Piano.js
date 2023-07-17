import React, { useRef } from 'react';
import styles from "./Piano-module.scss"
import { FaArrowRight } from "react-icons/fa";

function Piano() {

  return (
    
    <div className='music-container'>
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
                <img className='thumbnail' src='https://i.ytimg.com/vi/HgnVzt5APOI/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhlIFUoRDAP&rs=AOn4CLBXcn6eJMDTU5qEEPZazr5YRBRWbQ'></img>
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
                <img className='thumbnail' src='https://i.ytimg.com/vi/tRmv90OdB6k/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhlIFsoTjAP&rs=AOn4CLDXA7Nuiyo7GUljgVmK3ow8VGrxYA'></img>
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
                <img className='thumbnail' src='https://i.ytimg.com/vi/awX8JkBLByc/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhlIF0oTzAP&rs=AOn4CLAgW-FLmVaklGucF4mpznihUkPPbQ'></img>
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
  )
}

export default Piano;