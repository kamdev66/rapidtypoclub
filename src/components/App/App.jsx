import React from "react";
import ChallengeSection from "../challengeSection/ChallengeSection";
import Footer from "../footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import NavBar from "../NavBar/NavBar";
import { SAMPLE_PARAGRAPHS } from './../../data/sampleParagraphs'
import './App.css';

const totalTime=60;
const ServiceUrl="http://metaphorpsum.com/paragraphs/1/9";
const DefaultState={
    selectedParagraph: "Hello world!",
    timerStarted:false,
    timeRemaining:totalTime,
    words:0,
    characters:0,
    wpm:0,
    testInfo:[],
    
}

class App extends React.Component{
    state=DefaultState;

    fetchNewParagraphFallback=()=>{
        const data=SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ];

        this.setState({selectedParagraph: data})
        const selectedParagraphArray=this.state.selectedParagraph.split("");
    const testInfo= selectedParagraphArray.map(selectedLetter=>{
        return{
            testLetter: selectedLetter,
            status:"notAttempted",
        }
    });
    this.setState({...DefaultState,testInfo, selectedParagraph:data})
    
    }

    fetchNewParagraph=()=>{
        fetch(ServiceUrl)
        .then(res=>res.text())
        .then(data=>{
            this.setState({selectedParagraph: data})
            const selectedParagraphArray=this.state.selectedParagraph.split("");
        const testInfo= selectedParagraphArray.map(selectedLetter =>{
            return{
                testLetter: selectedLetter,
                status:"notAttempted",
            }
        });
        this.setState({...DefaultState ,testInfo, selectedParagraph:data})
        })

    }

    componentDidMount(){
       this.fetchNewParagraph();
    }

    startTimer=()=>{
          this.setState({timerStarted: true})
          const timer=setInterval(()=>{
              if(this.state.timeRemaining > 0){
                  //Change the WPM
                  const timeSpent=totalTime-this.state.timeRemaining;
                  const wpm=timeSpent > 0 ? (this.state.words / timeSpent) * totalTime : 0;
                this.setState({timeRemaining:this.state.timeRemaining-1,
                wpm:parseInt(wpm)
                }); 
              }
              else{
                  clearInterval(timer);
              }
              },1000);
    }
 
    startAgain=()=>{
        this.fetchNewParagraph();
    }

    handleUserInput=(inputValue)=>{
        if(!this.state.timerStarted){
            this.startTimer();
        }

        const characters=inputValue.length;
        const words=inputValue.split(" ").length;
        const index=characters-1;

        if(index<0){
            this.setState({
                testInfo:[
                    {
                        testLetter:this.state.testInfo[0].testLetter,
                        status: "notAttempted"
                    },
                    ...this.state.testInfo.slice(1)

                ],
                characters,
                words,
            })
            return;
        }
        if(index>=this.state.selectedParagraph.length){
            this.setState({characters,words});
            return;
        }

        //Make a copy of testinfo
        const testInfo=this.state.testInfo;
        if(!(index===this.state.selectedParagraph.length-1))
             testInfo[index+1].status="notAttempted";

             //check for the correct typed letters
             const isCorrect=inputValue[index]===testInfo[index].testLetter;

             //update the testInfo
             testInfo[index].status=isCorrect?"correct" : "incorrect";

             //update the state
             this.setState({
                 testInfo,
                 words,
                 characters
             })
    }

    render(){
        return(
            <>
            <div className="app">
                {/* NavBar */}
                  <NavBar/>
                {/* Landing page */}
                <LandingPage/>
                {/* Challenge Section */}
                <ChallengeSection 
                    selectedParagraph={this.state.selectedParagraph}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                 />
                {/* Footer */}
                <Footer/>

            </div>
            </>
        )
    }
}
export default App;