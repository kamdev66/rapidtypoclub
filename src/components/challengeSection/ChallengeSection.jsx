import React from 'react';
import TestContainer from '../testContainer/TestContainer';
import './ChallengeSection.css';

function ChallengeSection({selectedParagraph,timeRemaining,timerStarted,words,characters,wpm,testInfo,onInputChange,startAgain}) {
  
  return (
    <>
    <div className="challenge-sec-container">
        <h1 data-aos="fade-down" className="challenge-sec-header" >
             Ready for Speed Test!
        </h1>
        <TestContainer selectedParagraph={selectedParagraph} timeRemaining={timeRemaining} timerStarted={timerStarted} words={words} characters={characters} wpm={wpm} testInfo={testInfo} onInputChange={onInputChange} startAgain={startAgain}/>
    </div>
    </>
  )
}

export default ChallengeSection;