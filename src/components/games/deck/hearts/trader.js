// it's gonna be hard to not just flesh this program out with super ai
import {useState} from 'react'
import {tradeRotation} from './tradeRotation'
import { cardSorter } from '../../cardSorter';
import { aiTrade } from './aiTrade';
export const trader =(hand1,hand2,hand3,hand4,playerChoice,tradeDirection)=>{
    
    let trade1= playerChoice;
    let trade2= aiTrade(hand2);
    let trade3= aiTrade(hand3);
    let trade4= aiTrade(hand4);
    console.log('?????',trade1, trade2, trade3, trade4)

    console.log(hand1, trade1)
    let newHand1 = hand1.filter(card =>{
        if(!trade1.includes(card)){
            return card
        }
    })
    let newHand2 = hand2.filter(card =>{
        if(!trade2.includes(card)){
            return card
        }
    })
    let newHand3 = hand3.filter(card =>{
        if(!trade3.includes(card)){
            return card
        }
    })
    let newHand4 = hand4.filter(card=>{
        if(!trade4.includes(card)){
            return card
        }
    })

    // remove cards from each players hand then put them into the other players hand, then sort
    switch (tradeDirection){
        case 'R':
            newHand1 = newHand1.concat(trade2)
            newHand2 = newHand2.concat(trade3)
            newHand3 = newHand3.concat(trade4)
            newHand4 = newHand4.concat(trade4)
            break;
        case 'L':
            newHand1 = newHand1.concat(trade4)
            newHand2 = newHand2.concat(trade1)
            newHand3 = newHand3.concat(trade2)
            newHand4 = newHand4.concat(trade3)
            break;
        case 'F': 
            newHand1 = newHand1.concat(trade3)
            newHand2 = newHand2.concat(trade4)
            newHand3 = newHand3.concat(trade1)
            newHand4 = newHand4.concat(trade2)
            break;       
        case 'N': 
            newHand1 = hand1
            newHand2 = hand2
            newHand3 = hand3
            newHand4 = hand4
            break;
        default:
            console.log('something went wrong')
    }
        newHand1 = cardSorter(newHand1,'hearts')
        newHand2 = cardSorter(newHand2,'hearts')
        newHand3 = cardSorter(newHand3,'hearts')
        newHand4 = cardSorter(newHand4,'hearts')
    // console.log('??',newHand1)
    return {newHand1, newHand2, newHand3, newHand4}
}