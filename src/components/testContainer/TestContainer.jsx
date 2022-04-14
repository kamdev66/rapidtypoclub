import React from 'react';
import TryAgain from '../tryAgain/TryAgain';
import TypingChallengeContainer from '../typingChallenge/TypingChallengeContainer';
import './TestContainer.css';

function TestContainer({selectedParagraph,words,characters,wpm, timeRemaining,timerStarted,testInfo,onInputChange,startAgain}) {
  return (
    <div className="test-container">
      {
        timeRemaining > 0 ? (<div data-aos="fade-up" className="typing-challenge-cont">
        <TypingChallengeContainer selectedParagraph={selectedParagraph} timeRemaining={timeRemaining} timerStarted={timerStarted} words={words} characters={characters} wpm={wpm} testInfo={testInfo} onInputChange={onInputChange}/>
      </div>) : (<div className="try-again-container">
            <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
        </div>)
      }
 
    </div>
  )
}

export default TestContainer