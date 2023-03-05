import React, { useState,useEffect } from 'react'
import { cardSorter } from '../../cardSorter'
import { pullAHand } from '../deck'
import { ai } from './ai'



import Header from './Header'
import { turnOrder } from './turnOrder'


function Hearts() {
  const [chosenCard, setChosenCard] = useState(['no',0])
  const [trick, setTrick] = useState([])
  const [hands, setHands] = useState({})
  const [hand1, setHand1] = useState([])
  const [hand2, setHand2] = useState([])
  const [hand3, setHand3] = useState([])
  const [hand4, setHand4] = useState([])
  const [scores, setScores] = useState({'player1':0, 'player2':0, 'player3':0,'player4':0})
  const [currentPlayer , setCurrentPlayer] = useState('')
  const [brokenHearts, setBrokenHearts] = useState(false)
  const [turn, setTurn] = useState(0)

  // console.log( 'hand2 ', hand2, ' hand3 ', hand3, ' hand4 ', hand4 )
  useEffect(()=>{
    let newRound = pullAHand(13, 4, 'hearts')
    // console.log(newRound)
    setHands(newRound)
  },[])

  
  // sudo code workout
  // default game rules and playout
  // whoever has the 2 of clubs has to play it, whether AI or player then the next player gets to play in the round, to the left of whoever played the 2 of clubs (check the two of clubs)
  // each player can play any card in suite (clubs), or if they don't have clubs, they can play any cards that aren't the hearts or queen of spades
  // whoever wins the hand gets to play next. 
  // hearts is now allowed if you don't have the in suite as well as the queen of spades.
  // 
  

  useEffect(()=>{
    console.log("computer code", currentPlayer)
    if(currentPlayer == 'player1'){

    }else if(currentPlayer){
      let valuableObject= {}
      let newHand = []
      switch(currentPlayer){
        case 'player2':
          console.log(hand2)
          valuableObject =ai (currentPlayer, hand2, trick, turn,brokenHearts)
          console.log('valuableObject', valuableObject)
          setHand2(valuableObject.rHand)
          setTrick(valuableObject.returnTrick)
          break;
        case 'player3':
          console.log(hand3)
          valuableObject = ai (currentPlayer, hand3, trick, turn,brokenHearts)
          console.log('valuableObject', valuableObject)
          setHand3(valuableObject.rHand)
          setTrick(valuableObject.returnTrick)
          break;
        case 'player4':
          console.log(hand4)
          valuableObject = ai (currentPlayer, hand4, trick, turn,brokenHearts)
          console.log('valuableObject', valuableObject)
          setHand4(valuableObject.rHand)
          setTrick(valuableObject.returnTrick)
          break;
        default:
          console.log('something has gone wrong.  ', currentPlayer)
      }

    }
  },[currentPlayer])

  useEffect(()=>{
    console.log('hello')
    let tempHand = hands.player1
    if(tempHand) tempHand =  cardSorter(hands.player1, 'hearts')
    setHand1(tempHand)
    if(tempHand) tempHand = cardSorter(hands.player2, 'hearts')
    setHand2(tempHand)
    if(tempHand) tempHand = cardSorter(hands.player3, 'hearts')
    setHand3(tempHand)
    if(tempHand) tempHand = cardSorter(hands.player4, 'hearts')
    setHand4(tempHand)
    setCurrentPlayer(turnOrder(hands,currentPlayer))
  },[hands])


  useEffect(()=>{
    if(trick[0]!=''){
      if(currentPlayer == 'player4'){
        setCurrentPlayer('player1')
      }else{
        let returnPlayer = `player${+currentPlayer.charAt(6)+1}`
        setCurrentPlayer(returnPlayer)
      }
    }
  },[trick])

  useEffect(()=>{
    console.log('ello mate')
    if(chosenCard[0]!='no'){
      console.log('hey', chosenCard[0]);
      let newHand = [...hand1]
      newHand.splice(chosenCard[1],1)
      // console.log(newHand)
      setHand1(newHand)
      // console.log(newHand)
      let newTrick = trick
      console.log(trick);
      newTrick.push(chosenCard[0])
      console.log(newTrick)
      setTrick(newTrick)
    }
  },[chosenCard])

  const chooseCard = (card, index)=>{
    setChosenCard([card,index])
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
            !hands || !hand1 ?<div>Hand Pull failed</div>:
            hand1.map((card, index)=>{
              return(
                <div onClick={(event)=>{ chooseCard(card,index) }} className='hearts__card'>
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
                <div className='hearts__card'>
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
                <div className='hearts__card'>
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
                <div className='hearts__card'>
                  {card}
                </div>
              )
            })
          }
          </div> {/* Cards End */}
        </div> {/* Hand End */}
        <div className='hearts__play'>
          
        </div>
      </div> {/* Table End */}
    </div>
    
  )
}

export default Hearts