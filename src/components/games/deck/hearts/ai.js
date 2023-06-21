import { possibleCards } from "./possibleCards";

export const ai =(currentPlayer,hand, trick,turn,brokenHearts)=>{
    let returnTrick = trick
    let card = ''
    let rHand = [...hand];
    let newCards = {}
    let rNumber = 0;
    let cardIndex =0;
    // console.log(returnTrick)
    if(turn == 0  && trick.length == 0){
        rHand.splice(0,1)
        card = '2C'
        returnTrick = ['2C']
    }else if(turn == 0){
        
        newCards = possibleCards(rHand, returnTrick, turn)
        
        // console.log(newCards)
        rNumber = Math.floor(Math.random()*newCards.possibleCards.length)
        cardIndex = newCards.possibleCardsIdx[rNumber]
        // console.log(rNumber);
        card = rHand[cardIndex]
        rHand.splice(cardIndex,1)
        returnTrick.push(card);
    }else if(turn>0){
        newCards = possibleCards(rHand, returnTrick, turn, brokenHearts)
        rNumber = Math.floor(Math.random()*newCards.possibleCards.length)
        //location confirmed for random card
        // console.log('possibleCards index', newCards.possibleCardsIdx)
        cardIndex = newCards.possibleCardsIdx[rNumber]
        card = rHand[cardIndex]
        rHand.splice(cardIndex,1)
        returnTrick.push(card)
        // console.log(newCards)
    }
    // console.log('return hand, ' ,rHand)
    return {rHand, card, returnTrick}
    // return card
}
