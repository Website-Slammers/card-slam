import React, { useState,useEffect } from 'react'
import { cardSorter } from '../../cardSorter'
import { pullAHand } from '../deck'


function Hearts() {
  const [chosenCard, setChosenCard] = useState('')
  const [hands, setHands] = useState({})
  const [hand1, setHand1] = useState([])
  const [hand2, setHand2] = useState([])
  const [hand3, setHand3] = useState([])
  const [hand4, setHand4] = useState([])
  const [scores, setScores] = useState({'player1':0, 'player2':0, 'player3':0,'player4':0})
  const [trick, setTrick] = useState([])

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


  useEffect(()=>{
    let currentTrick = trick.push(chosenCard)
    setTrick(currentTrick)
  },[chosenCard])

  useEffect(()=>{
    if(trick.length == 4){

    }
  },[trick])

  return (
    <div className="hearts">
      <div className="hearts__table">
        Hearts
        <div  className="hearts__hand hearts__hand--1">
          <span>1</span>
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
        </div>
          <div className="hearts__hand hearts__hand--2">
            <span>2</span>
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
          </div>
          <div className="hearts__hand hearts__hand--3">
            <span>3</span>
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
          </div>
          <div className="hearts__hand hearts__hand--4">
            <span>4</span>
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
          </div>
      </div>
    </div>
        
  )
}

export default Hearts