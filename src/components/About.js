import styles from "./Projects-module.scss"
import { FaArrowRight } from "react-icons/fa";

function About() {

  return (
    <div className='about-container'>
      <h2 className='hi'>Hello!</h2>
      <div className='about'>
        <p>
          I'm a CS + Math major @ University of Maryland, College Park. I love building things and expanding my knowledge wherever I go. 
        </p>
        <p>
          Currently, I'm a SWE intern at&nbsp;
          <a className='link' target="_blank" rel="noopener noreferrer" href='https://www.haylontech.com/' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Haylon Technologies <FaArrowRight className='arrow'/></a> 
          working backend. Previously, I was a SWE Intern at&nbsp;
          <a className='link' target="_blank" rel="noopener noreferrer" href='https://www.ticker.fund/' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Ticker Markets <FaArrowRight className='arrow'/></a> 
          &nbsp;&nbsp;working frontend and I was a research intern at UMD, studying the applications of NLP and reinforcement learning.
        </p>
        <p>
          When I'm not at my computer, you can find me playing the piano, playing tennis with friends, or enjoying a good read.
        </p>
      </div>
    </div>
  )
}

export default About;