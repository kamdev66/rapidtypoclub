import React from 'react'
import './TryAgain.css';

function TryAgain({words,characters,wpm,startAgain}) {
  return (
     <div data-aos="fade-up" className="try-again-container">
         <h1>Test Results</h1>

         <div className="result-container">
             <p><b>Characters: </b>{characters}</p>
             <p><b>Words: </b>{words}</p>
             <p><b>Speed: </b>{wpm} wpm</p>
         </div>

         <div>
             <button onClick={()=>startAgain()} className='start-again-btn end-buttons'>Try Again</button>

             <button className='share-btn end-buttons' onClick={()=>{
                 window.open("https://www.facebook.com/sharer/sharer.php?u=selftaughtwebdever.com","facebookshare-dialog", "width=800,height=600");
             }}>Share on facebbok</button>

             <button className='tweet-btn end-buttons' onClick={()=>{
                 window.open("https://twitter.com/intent/tweet?text=selftaughtwebdever", "Twitter", "width=800,height=600")
             }}>Share on twitter</button>
         </div>
     </div>
  )
}

export default TryAgain