import React from 'react';
import ChallengeDetails from '../challengeDetails/ChallengeDetails';
import TypingChallenge from '../typingchallengebox/TypingChallenge';
import './TypingChallengeContainer.css';

function TypingChallengeContainer({selectedParagraph,words,characters,wpm, timeRemaining,timerStarted,testInfo,onInputChange}) {
  return (
    <>
    <div className="typing-challenge-container">
        {/* Details Section*/}
         <div className="details-container">
             {/* words Typed*/}
              <ChallengeDetails cardName="Words" cardValue={words}/>
             {/* Characters Typed*/}
             <ChallengeDetails cardName="Characters" cardValue={characters}/>
             {/* Speed */}
             <ChallengeDetails cardName="Speed" cardValue={wpm}/>
         </div>

        {/* The real challenge  Section*/}
        <div className="typewriter-container">
            <TypingChallenge selectedParagraph={selectedParagraph} timeRemaining={timeRemaining} timerStarted={timerStarted} words={4} characters={14} wpm={20} testInfo={testInfo} onInputChange={onInputChange}
            />
        </div>
    </div>
    </>
  )
}

export default TypingChallengeContainer