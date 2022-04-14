import React from 'react';
import './ChallengeDetails.css';

function ChallengeDetails({cardName,cardValue}) {
  return (
    <div className="details-card-container">
        <div className="card-name">
            {cardName}
        </div>
        <div className="card-value">
            {cardValue}
        </div>
    </div>
  )
}

export default ChallengeDetails