//returns values that a possible for a player or an AI to play in a hearts game

export const possibleCards =(rHand,trick,turn)=>{
    let possibleCards = [...rHand]
    let possibleCardsIdx = []
    let inSuite = false;
    let suite = 0
    let newTrick = trick
    // console.log(newTrick);
    //this checks which suite is currently being played, if there isn't one I have to respond by letting the player or AI pick their own possible choices
    if(newTrick && newTrick[0])suite = newTrick[0].charAt(1)
    // console.log('ello')
    // inSuite is true if the suite is in the hand array that is being played, if not it allows the rest of the suites to be played barring hearts on turn 1 or spades
    for(let i = 0; i< possibleCards.length; i++){
        if(possibleCards[i].charAt(1) == suite){
            inSuite = true;
        }
    }
    //turn0 algorythm 

    possibleCards = possibleCards.filter((element, idx)=>{
        //if turn == 0 then hearts are not in the possible cards list.
        if(turn == 0){
                //if they do have the suite and the card is in the suite, add it to the possible cards index.
            if(inSuite == true && element.charAt(1) == suite){
                possibleCardsIdx.push(idx)
                return element
                // if they don't have the suite and the card isn't a heart, add it to the possible cards index.
            }else if(inSuite == false && element.charAt(1) != 'H'){
                possibleCardsIdx.push(idx)
                return element
            }
        }

        //if turn != 0 then hearts are allowed in the possible card list as long as the player doesn't have the suit.
        if(turn != 0){
            if(inSuite == true && element.charAt(1) == suite){
                possibleCardsIdx.push(idx)
                return element
            }else if(inSuite == false){
                possibleCardsIdx.push(idx)
                return element
            }
        }
    })
    // console.log("possible Cards", possibleCards);
    return {possibleCards, possibleCardsIdx}
}

