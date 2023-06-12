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

  // pulls all hands for a new round and sets them 
  useEffect(()=>{
    if(roundReset == true){
      newRoundBtn()
    }
    else if(roundReset == false){
      let newRound = pullAHand(13, 4, 'hearts')
      // console.log(newRound)
      setHands(newRound)
    }
  },[roundReset])

  const newRoundBtn=()=>{
    setBtnDisplay("btn--newRound")
  }
  const hideRoundBtn=(event)=>{
    setBtnDisplay("hidden")
    setRoundReset(false)
  }

  // sudo code workout
  // default game rules and playout
  // whoever has the 2 of clubs has to play it, whether AI or player then the next player gets to play in the round, to the left of whoever played the 2 of clubs (check the two of clubs)
  // each player can play any card in suite (clubs), or if they don't have clubs, they can play any cards that aren't the hearts or queen of spades
  // whoever wins the hand gets to play next. 
  // hearts is now allowed if you don't have the in suite as well as the queen of spades.
  // 2nd priority is to get rounds rotating
  // 2.5th new round button that resets hands
  // 3rd priority is to make trading happen
  // 4th priority is to make a win state
  // 5th priority is to clean up code and make it more legible and split up
  // 6th priority is to write more AI
  
  // round end would be cool if it displayed players point cards (guess that's a possibility... but it's a lot of work)


  
  // runs AI code if it's not player 1's turn.
  //////// {    current Player     }
  useEffect(()=>{
    console.log("current player is ", currentPlayer)
    // console.log(roundScores)
    
    if(currentPlayer == 'player1'){

    }else if(currentPlayer != 'player1' && trick.length < 4){
      //valuable object is all the information required to change the hand and set the trick, 
      //Ai is code I wrote called ai that plays cards according to the rules (using possible cards)
      const timer = setTimeout(()=>{
        aiRun()},250)
      return () => clearTimeout(timer)
    }
    if(trick.length === 4){
      console.log('finishing Trick, ', trick)
      
      let { playerWin, points } = trickWin(trick,hands)
      // console.log('playerWin ', playerWin, ' points ', points)

      setRoundScores ({...roundScores, [playerWin]: roundScores[playerWin] + points})
      
      // console.log('hello ',playerWin, points,roundScores)
      setRoundWinner(playerWin)

      const timer = setTimeout(()=>{setTrick([])},100)
      setCurrentPlayer(playerWin)
      setTurn(turn+1)
      if(hand1.length == 0 && hand2.length == 0 && hand3.length == 0 && hand4.length == 0){
        console.log('elloChum')
        let {shot, player} = moonShooter(scores)

        if(shot === true){
          setScores({'player1':scores.player1+26,
            'player2':scores.player2+26,
            'player3':scores.player3+26,
            'player4':scores.player4+26})
          setScores({...scores,player:scores[player]-26})
          console.log(scores)

        }else{
          setScores({'player1':scores.player1+roundScores.player1,
          'player2':scores.player2+roundScores.player2,
          'player3':scores.player3+roundScores.player3,
          'player4':scores.player4+roundScores.player4})
          console.log(scores)
        }
        setRoundScores({'player1':0, 'player2':0, 'player3':0, 'player4':0})
        setRoundReset(true)
      }
      return()=> clearTimeout(timer)
    }else if(trick.length >4){
      console.log('something has gone wrong with trick length ', currentPlayer)
    }
    
  },[cardsPlayed])

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
  
  const [count, setCount] = useState(1);

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
    setCardsPlayed(cardsPlayed +1)
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
    if(trick.length == 4){
      
      let { playerWin, points } = trickWin(trick,hands)
      setRoundScores ({...roundScores, [playerWin]: roundScores[playerWin] + points})
      console.log('hello ',playerWin, points,roundScores)
      setRoundWinner(playerWin)
      const timer = setTimeout(()=>{setTrick([])},100)
      setCurrentPlayer(playerWin)
      setTurn(turn+1)

      if(hand1.length == 0 && hand2.length == 0 && hand3.length == 0 && hand4.length == 0){
        console.log('elloChum')
        let {shot, player} = moonShooter(scores)

        if(shot === true){
          setScores({'player1':scores.player1+26,
            'player2':scores.player2+26,
            'player3':scores.player3+26,
            'player4':scores.player4+26})
          setScores({...scores,player:scores[player]-26})
          console.log(scores)

        }else{
          setScores({'player1':scores.player1+roundScores.player1,
          'player2':scores.player2+roundScores.player2,
          'player3':scores.player3+roundScores.player3,
          'player4':scores.player4+roundScores.player4})
          console.log(scores)
        }
        setRoundScores({'player1':0, 'player2':0, 'player3':0, 'player4':0})
        setRoundReset(true)
      }
      return () => clearTimeout(timer)

    }else if(trick.length >4){
      console.log('something has gone wrong with trick length ', currentPlayer)
    }
    
  },[chosenCard])

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

  //function that sets the card the player chose
  const chooseCard = (card, index)=>{
    let pCards = possibleCards(hand1,trick,turn,brokenHearts)
    // console.log(pCards.possibleCards)
    if(currentPlayer == 'player1'){
      if(pCards.possibleCards.includes(card)){
        setChosenCard([card,index])
      }
      else{
        console.log('This card is not a valid pick!')
      }
    }else{
      console.log("It's not your turn!")
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
                <div key={index} onClick={(event)=>{ chooseCard(card,index) }} className='hearts__card'>
                  {card}
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
         this is where my infinite loop problem is spawning 
        
        <span className={`${btnDisplay}`} onClick={()=>hideRoundBtn()} >
          New Round
        </span>
      </div> {/* Table End */}
    </div>
  )
}

export default Hearts