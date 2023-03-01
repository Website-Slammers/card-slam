import React, { useState,useEffect } from 'react'
import { cardSorter } from '../../cardSorter'
import { pullAHand } from '../deck'


function Hearts() {
  const [hands, setHands] = useState({})
  const [hand1, setHand1] = useState([])
  const [hand2, setHand2] = useState([])
  const [hand3, setHand3] = useState([])
  const [hand4, setHand4] = useState([])
  const [scores, setScores] = useState({'player1':0, 'player2':0, 'player3':0,'player4':0})

  useEffect(()=>{
    let newRound = pullAHand(13, 4, 'hearts')
    console.log(newRound)
    setHands(newRound)
  },[])

  useEffect(()=>{
    console.log(hands)
    let tempHand = hands.player1
    if(tempHand) tempHand =  cardSorter(hands.player1, 'hearts')
    setHand1(tempHand)
  },[hands])

  // useEffect(()=>{
  //   console.log(hand1)
  // }, [hand1])
  return (
    <div>
      Hearts
      <div className="hand1">Player 1</div>
      {
        !hands || !hand1 ?<div>Hand Pull failed</div>:
        hand1.map((card, index)=>{
          return(
            <div className='hand1__card'>
              {card}
            </div>
          )
        })
      }





    </div>
  )
}

export default Hearts