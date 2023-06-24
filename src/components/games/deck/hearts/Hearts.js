import React, { useState,useEffect } from 'react'
import { cardSorter } from '../../cardSorter'
import { pullAHand } from '../deck'
import { ai } from './ai'
import { turnStart } from './turnStart'

import Header from './Header'
import { turnOrder } from './turnOrder'
import { trickWin } from './trick'
import { possibleCards } from './possibleCards'
import {trader} from './trader'
import { moonShooter } from './moonShooter'
import { tradeRotation } from './tradeRotation'

function Hearts() {

  const [roundWinner,setRoundWinner]= useState();
  const [chosenCard, setChosenCard] = useState(['no',0])
  const [trick, setTrick] = useState([])
  const [hands, setHands] = useState({})
  const [hand1, setHand1] = useState([])
  const [hand2, setHand2] = useState([])
  const [hand3, setHand3] = useState([])
  const [hand4, setHand4] = useState([])
  const [roundScores, setRoundScores] = useState({'player1':0, 'player2':0, 'player3':0, 'player4':0})
  const [scores, setScores] = useState({'player1':0, 'player2':0, 'player3':0,'player4':0})
  const [currentPlayer , setCurrentPlayer] = useState('')
  const [brokenHearts, setBrokenHearts] = useState(false)
  const [turn, setTurn] = useState(0)
  const [cardsPlayed, setCardsPlayed] = useState(-1)
  const [gameStart, setGameStart]= useState(false)
  const [roundReset,setRoundReset]=useState(false)
  const [btnDisplay,setBtnDisplay]= useState('hidden')
  const [btn2Display, setBtn2Display] = useState('hidden')
  const [tradingRound,setTradingRound] = useState(false)
  const [playerChoice,setPlayerChoice] = useState([])
  const [tradeDirection, setTradeDirection] = useState('R')

  useEffect(()=>{
    console.log(playerChoice)
    console.log(btn2Display)
  },[playerChoice])

  useEffect(()=>{
    if(hand1?.length >0 && hand2?.length && hand3?.length && hand4?.length){
      //if trading state is true then all player selections need to do is change out the 3 cards allowed for trading. no cards should be playable during this round.
      //I should have functions that pay attention to AI hands and trade intelligently enough.
      if(playerChoice?.length == 3){
        let {newHand1,newHand2,newHand3,newHand4} = trader(hand1,hand2,hand3,hand4,playerChoice,tradeDirection)
        console.log(newHand1,'heyssdfa')
        setHand1(newHand1)
        setHand2(newHand2)
        setHand3(newHand3)
        setHand4(newHand4)
        setTradeDirection(tradeRotation(tradeDirection))
        setCardsPlayed(cardsPlayed + 1)
        setBtn2Display('hidden')
      }else{
        console.log('improper number of cards to trade, sir')
        setBtn2Display('btn--trade')
      }
    }
  },[btn2Display])

  // sudo code workout
  // default game rules and playout
  // whoever has the 2 of clubs has to play it, whether AI or player then the next player gets to play in the round, to the left of whoever played the 2 of clubs (check the two of clubs)
  // each player can play any card in suite (clubs), or if they don't have clubs, they can play any cards that aren't the hearts or queen of spades
  // whoever wins the hand gets to play next. 
  // hearts is now allowed if you don't have the in suite as well as the queen of spades.
  // hearts only in hand for 1st player not working
  // 3rd priority is to fix all the bugs that have been cropping up, 2c doesn't start occasionally, scores bad again, no new round button... 
  // 4th priority is to make a win state
  // 5th priority is to clean up code and make it more legible and split up
  // 6th priority is to write more AI
  // round end would be cool if it displayed players point cards (guess that's a possibility... but it's a lot of work)
  
  // runs AI code if it's not player 1's turn.

  // pulls all hands for a new round and sets them 

  useEffect(()=>{
    if(roundReset == true){
      
    }else if(roundReset == false){
      let newRound = pullAHand(13, 4, 'hearts')
      // console.log(newRound)
      setHands(newRound)
      setCurrentPlayer(turnStart(hands))
      setBrokenHearts(false)
      setCardsPlayed(cardsPlayed + 1)
      setTrick([])
      console.log('hands, ',hands)
      setBtn2Display('btn--trade')
    }
  },[roundReset])

  //////// {    current Player     }
  useEffect(()=>{
    if(currentPlayer != 'player1' && trick.length < 4){
      //valuable object is all the information required to change the hand and set the trick, 
      //Ai is code I wrote called ai that plays cards according to the rules (using possible cards)
      const timer = setTimeout(()=>{
        aiRun()},250)
      return () => clearTimeout(timer)
    }
    if(trick.length === 4 && currentPlayer != 'player1'){
      
      let { playerWin, points } = trickWin(trick,hands)
      console.log('ai trick score firing')
      console.log('problem ', points, playerWin)
      setRoundScores ({...roundScores, [playerWin]: roundScores[playerWin] + points})
      setRoundWinner(playerWin)

      const timer = setTimeout(()=>{
        console.log(trick)
        setTrick([])
        setCurrentPlayer(playerWin)
        setTurn(turn+1)
      },100)
      
      return()=> clearTimeout(timer)
    }else if(trick.length >4){
      console.log('something has gone wrong with trick length ', currentPlayer)
    }
    
  },[cardsPlayed])

//changes the player based on the trick changing
  // {     trick     }
  useEffect(()=>{
    // console.log('trick',trick)
    if(trick.length != 0 && trick.length != 4){
      if(currentPlayer == 'player4'){
        setCurrentPlayer('player1')
      }else{
        let returnPlayer = `player${+currentPlayer.charAt(6)+1}`
        setCurrentPlayer(returnPlayer)
      }
    }else if(trick.length == 0 ){
      setCurrentPlayer(roundWinner) 
    }
    setCardsPlayed(cardsPlayed +1)
  },[trick.length])
  
  //sets all hands to each player using the hands object and sorts the cards in order of suits,
  //also using the card sorter function that has the potential to sort for other types of games, as well as sets the turn order based on the 2 of clubs
  //    {     hands     }
  useEffect(()=>{
    let tempHand = hands.player1
    if(tempHand) tempHand =  cardSorter(hands.player1, 'hearts')
    setHand1(tempHand)
    if(tempHand) tempHand = cardSorter(hands.player2, 'hearts')
    setHand2(tempHand)
    if(tempHand) tempHand = cardSorter(hands.player3, 'hearts')
    setHand3(tempHand)
    if(tempHand) tempHand = cardSorter(hands.player4, 'hearts')
    setHand4(tempHand)
    console.log('game Starto')
    setCurrentPlayer(turnStart(hands))
    setBtn2Display('btn--trade')
  },[hands])

  //player interaction where you choose a card. 
  //needs to check validity of chosen card in suite or otherwise (not yet written)
  // {     chosen Card     }
  useEffect(()=>{

    if(chosenCard[0] != 'no'){
      let newHand = [...hand1]
      newHand.splice(chosenCard[1],1)
      setHand1(newHand)
      let newTrick = trick
      newTrick.push(chosenCard[0])
      // console.log('newTrick ',newTrick)
      setTrick(newTrick)
    }else{

    }
    if(trick.length == 4 && currentPlayer == 'player1'){
      
      let { playerWin, points } = trickWin(trick,hands)
      setRoundScores ({...roundScores, [playerWin]: roundScores[playerWin] + points})
      // console.log('player 1 trick firing')
      // console.log('problem ', points, playerWin)
      setRoundWinner(playerWin)
      const timer = setTimeout(()=>{
        console.log(trick)
        setTrick([])
        setCurrentPlayer(playerWin)
        setTurn(turn+1)
        
      },100)
      
      return () => clearTimeout(timer)

    }else if(trick.length >4){
      console.log('something has gone wrong with trick length ', currentPlayer)
    }
    
  },[chosenCard])


  useEffect(()=>{
    roundEnd()
  },[trick])

  useEffect(()=>{
    newRoundBtn()
  },[scores])

  const aiRun=()=>{
    // console.log('aiRun')
    let valuableObject= {}

    switch(currentPlayer){
      case 'player2':
        // console.log('player2')
        valuableObject = ai(currentPlayer, hand2, trick, turn,brokenHearts)
        // console.log('valuableObject', valuableObject)
        if(valuableObject.card.charAt(1) == 'H'){
          setBrokenHearts(true)
        }
        setHand2(valuableObject.rHand)
        setTrick(valuableObject.returnTrick)
        break;

      case 'player3':
        // console.log('player3')
        valuableObject = ai (currentPlayer, hand3, trick, turn,brokenHearts)
        // console.log('valuableObject', valuableObject)
        if(valuableObject.card.charAt(1) == 'H'){
          setBrokenHearts(true)
        }
        setHand3(valuableObject.rHand)
        setTrick(valuableObject.returnTrick)
        break;

      case 'player4':
        // console.log('player4')
        valuableObject = ai (currentPlayer, hand4, trick, turn,brokenHearts)
        // console.log('valuableObject', valuableObject)
        if(valuableObject.card.charAt(1) == 'H'){
          setBrokenHearts(true)
        }
        setHand4(valuableObject.rHand)
        setTrick(valuableObject.returnTrick)
        break;

      default:
        console.log('something has gone wrong.  ', currentPlayer)
    }

  }
  const newRoundBtn=()=>{
    if(cardsPlayed >0 ){
      setBtnDisplay("btn--newRound")
      setRoundReset(true)
    }
    
  }
  const newTradeBtn=()=>{
    setBtn2Display('btn--trade')
  }
  const hideRoundBtn=()=>{
    setBtnDisplay("hidden")
    setRoundReset(false)
  }

  const hideTradeBtn=()=>{
    if(playerChoice.length == 3){
      setBtn2Display('hidden')
    }else {
      console.log('not enough cards, strange-ah')
    }
  }

  //function that sets the card the player chose
  const chooseCard = (card, index)=>{
    let pCards = possibleCards(hand1,trick,turn,brokenHearts)
    // console.log(pCards.possibleCards)
    if(currentPlayer == 'player1' && btn2Display == 'hidden'){
      if(pCards.possibleCards.includes(card)){
        setChosenCard([card,index])
      }
      else{
        console.log('This card is not a valid pick!')
      }
    }else if(btn2Display != 'hidden'){
      if(playerChoice.includes(card)){
        let filter = playerChoice.filter(cards => cards != card )
        setPlayerChoice(filter)
      }else if(playerChoice.length <3){ 
        let newPlayerChoice = playerChoice
        setPlayerChoice([...newPlayerChoice,card])
      }
    }
  }

  const roundEnd=()=>{
    let value = roundScores.player1+roundScores.player2+roundScores.player3+roundScores.player4
    if(hand1?.length == 0 && hand2?.length == 0 && hand3?.length == 0 && hand4?.length == 0 && value == 26){
      console.log('elloChum')
      let {shot, player} = moonShooter(roundScores)

      if(shot === true){
        setScores({'player1':scores.player1+26,
          'player2':scores.player2+26,
          'player3':scores.player3+26,
          'player4':scores.player4+26})
        setScores({...scores,[player]:scores[player]-26})
        console.log(scores)

      }else{
        setScores({'player1':scores.player1+roundScores.player1,
        'player2':scores.player2+roundScores.player2,
        'player3':scores.player3+roundScores.player3,
        'player4':scores.player4+roundScores.player4})
        console.log(scores)
      }
      setRoundScores({'player1':0, 'player2':0, 'player3':0, 'player4':0})
      setTurn(0)
    }
  }
  
  return (
    <div className="hearts">
      <Header />
      
      {/* Table Start */}
      <div className="hearts__table">
        Hearts
      
        {/* Player One Start */}
        <div  className="hearts__hand hearts__hand--1">
          <span className="hearts__player">1</span>
          <div className="hearts__cards">
          {
            !hands || !hand1 ?<div key={'notAccessable'}>Hand Pull failed</div>:
            hand1.map((card, index)=>{
              return(
                <div key={index} onClick={(event)=>{ chooseCard(card,index) }}className='hearts__card'>
                  {playerChoice.includes(card)?
                    <div className='hearts__card--trade' >{card}</div> 
                    :<div>{card}</div>
                  }
                </div>
              )
            })
          }
          </div> {/* Cards End */}
        </div> {/* Hand End */}

        {/* Player Two Start */}
        <div className="hearts__hand hearts__hand--2">
          <span className="hearts__player">2</span>
          <div className="hearts__cards">
          {
            !hands || !hand2?<div>Hand Pull failed</div>:
            hand2.map((card, index)=>{
              return(
                <div key={index} className='hearts__card'>
                  {card}
                </div>
              )
            })
          }
          </div> {/* Cards End */}
        </div> {/* Hand End */}

        {/* Player Three Start */}
        <div className="hearts__hand hearts__hand--3">
          <span className="hearts__player">3</span>
          <div className="hearts__cards">
          {
            !hands || !hand3?<div>Hand Pull failed</div>:
            hand3.map((card, index)=>{
              return(
                <div key={index} className='hearts__card'>
                  {card}
                </div>
              )
            })
          }
          </div> {/* Cards End */}
        </div> {/* Hand End */}

        {/* Player Four Start */}
        <div className="hearts__hand hearts__hand--4">
          <span className="hearts__player">4</span>
          <div className="hearts__cards">
          {
            !hands || !hand4?<div>Hand Pull failed</div>:
            hand4.map((card, index)=>{
              return(
                <div key={index} className='hearts__card'>
                  {card}
                </div>
              )
            })
          }
          </div> {/* Cards End */}
        </div> {/* Hand End */}
        <div className='hearts__trick'> {/*trick start*/}
          <div className="hearts__cards">
          {
            !hands || !trick  || !trick.length?<div>No cards in play</div>:
            trick.map((card, index)=>{
              return(
                <div key={index} className='hearts__card'>
                  {card}
                </div>
              )
            })
          }
          </div> {/* Cards End */}
        </div>
         
        
        <span className={`${btnDisplay}`} onClick={()=>hideRoundBtn()} >
          New Round
        </span>
        <span className={`${btn2Display}`} onClick={()=>hideTradeBtn()}>
          Trade
        </span>
        <span className='scores__thisRound'>
          scores this round <br/>
          P1: {roundScores.player1} &nbsp;
          P2: {roundScores.player2} &nbsp;
          P3: {roundScores.player3} &nbsp;
          P4: {roundScores.player4} &nbsp;
        </span>
        <div className='scores__scoreBoard'>
          scoreboard<br/>
          P1 P2 P3 P4<br/>
          {scores.player1}&nbsp;&nbsp;&nbsp;{scores.player2}&nbsp;&nbsp;&nbsp;{scores.player3}&nbsp;&nbsp;&nbsp;{scores.player4}
        </div>
      </div> {/* Table End */}
    </div>
  )
}

export default Hearts