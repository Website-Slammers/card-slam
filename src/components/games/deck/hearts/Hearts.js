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
    if(tempHand) tempHand = cardSorter(hands.player2, 'hearts')
    setHand2(tempHand)
    if(tempHand) tempHand = cardSorter(hands.player3, 'hearts')
    setHand3(tempHand)
    if(tempHand) tempHand = cardSorter(hands.player4, 'hearts')
    setHand4(tempHand)
  },[hands])

  // useEffect(()=>{
  //   console.log(hand1)
  // }, [hand1])
  return (
    <div className="hearts">
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
        <div className="hand2">Player 2</div>
          {
            !hands || !hand2?<div>Hand Pull failed</div>:
            hand2.map((card, index)=>{
              return(
                <div className='hand2__card'>
                  {card}
                </div>
              )
            })
          }
        <div className="hand3">Player 3</div>
          {
            !hands || !hand3?<div>Hand Pull failed</div>:
            hand3.map((card, index)=>{
              return(
                <div className='hand3__card'>
                  {card}
                </div>
              )
            })
          }
        <div className="hand4">Player 4</div>
          {
            !hands || !hand4?<div>Hand Pull failed</div>:
            hand4.map((card, index)=>{
              return(
                <div className='hand4__card'>
                  {card}
                </div>
              )
            })
          }


    </div>
        
  )
}

export default Hearts