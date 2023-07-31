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
          <a className='link' target="_blank" rel="noopener noreferrer" href='https://www.haylontech.com/'>Haylon Technologies <FaArrowRight className='arrow'/></a> 
          &nbsp;&nbsp;working backend and&nbsp;
          <a className='link' target="_blank" rel="noopener noreferrer" href='https://www.ticker.fund/'>Ticker Markets <FaArrowRight className='arrow'/></a> 
          &nbsp;&nbsp;working frontend. Previously, I was a research intern at UMD, studying the applications of NLP and reinforcement learning.
        </p>
        <p>
          When I'm not at my computer, you can find me playing the piano, playing tennis with friends, or finding the motivation to go to the gym.
        </p>
      </div>
    </div>
  )
}

export default About;