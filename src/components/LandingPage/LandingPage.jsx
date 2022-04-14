import React from 'react';
import './LandingPage.css'
import flash from './../../materials/Flash-PNG-Pic.png';
import Typewriter from 'typewriter-effect';

function LandingPage() {
  return (
   <div className="landing-container">
       <div data-aos="fade-right" className="landing-left">
           <h1 className='landing-header'>Can you type...</h1>
           <div className="typewriter-container">
           <Typewriter
             options={{
             strings: ['Fast?', 'Correct?', 'Quick?'],
             autoStart: true,
             loop: true,
             }}
/>
           </div>
       </div>
       <div data-aos="fade-left" className="landing-left">
           <img src={flash} alt='error' className='flash-img'/>
       </div>
   </div>
  )
}

export default LandingPage;