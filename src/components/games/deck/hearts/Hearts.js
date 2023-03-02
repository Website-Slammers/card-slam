import React, { useState,useEffect } from 'react'
import { cardSorter } from '../../cardSorter'
import { pullAHand } from '../deck'

import Header from './Header'
import { turnOrder } from './turnOrder'


function Hearts() {
  const [chosenCard, setChosenCard] = useState('')
  const [trick, setTrick] = useState([])
  const [hands, setHands] = useState({})
  const [hand1, setHand1] = useState([])
  const [hand2, setHand2] = useState([])
  const [hand3, setHand3] = useState([])
  const [hand4, setHand4] = useState([])
  const [scores, setScores] = useState({'player1':0, 'player2':0, 'player3':0,'player4':0})
  const [startingPlayer , setStartingPlayer] = useState('')
  const [swap, setSwap] = useState([])
  const [roundSwapState, setRoundSwapState] = (true)

  useEffect(()=>{
    let newRound = pullAHand(13, 4, 'hearts')
    // console.log(newRound)
    setHands(newRound)
  },[])

  useEffect(()=>{
    console.log(hands)
    let tempHand = hands.player1
    if(tempHand) tempHand =  cardSorter(hands.player1, 'hearts')
    setHand1(tempHand)
    if(tempHand) tempHand = cardSorter(hands.player2, 'hearts')
    setHand2(tempHand)
    if(tempHand) tempHand = cardSorter(hands.player3, 'hearts')
    setHand3(tempHand)
    if(tempHand) tempHand = cardSorter(hands.player4, 'hearts')
    setHand4(tempHand)
    setStartingPlayer(turnOrder(hands))
  },[hands])

  // useEffect(()=>{
  //   console.log(hand1)
  // }, [hand1])


  useEffect(()=>{
    let currentTrick = trick
    currentTrick.push(chosenCard)
    setTrick(currentTrick)
  },[chosenCard])

  useEffect(()=>{
    if(trick.length == 4){
      
    }
  },[trick])

  useEffect(()=>{
    if(roundSwapState == true){

    }
  },[roundSwapState])


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
                <div onClick={(event)=>{ setChosenCard(card) }} className='hearts__card'>
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