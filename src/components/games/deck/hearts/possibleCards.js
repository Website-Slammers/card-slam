//returns values that a possible for a player or an AI to play in a hearts game

export const possibleCards =(rHand,trick,turn,brokenHearts)=>{
    let possibleCards = [...rHand]
    let possibleCardsIdx = []
    let inSuite = false;
    let suite = ''
    let newTrick = trick
    let heartsPrevention = true
    // console.log('nTrick ', newTrick);
    // console.log('Turn ', turn)
    // console.log('rHand ', rHand)
    // console.log('heartsBroken ', brokenHearts)
    //this checks which suite is currently being played, if there isn't one I have to respond by letting the player or AI pick their own possible choices
    if(newTrick.length > 0) suite = newTrick[0].charAt(1)
    // console.log('ello')
    // preventing the hearts paradigm
    // inSuite is true if the suite is in the hand array that is being played, if not it allows the rest of the suites to be played barring hearts on turn 1 or spades
    for(let i = 0; i< possibleCards.length; i++){
        if(possibleCards[i].charAt(1) != 'H'){
            heartsPrevention = false
        }
        if(possibleCards[i].charAt(1) == suite){
            inSuite = true;
        }
    }
    //turn0 algorythm 
    // console.log('inSuite ',inSuite)
    possibleCards = possibleCards.filter((element, idx)=>{
        //if turn == 0 then hearts are not in the possible cards list.
        if(turn == 0){
                //if they do have the suite and the card is in the suite, add it to the possible cards index.
            if(inSuite == true && element.charAt(1) == suite){
                possibleCardsIdx.push(idx)
                return element
                // if they don't have the suite and the card isn't a heart or the queen of spades, add it to the possible cards index.
                
            }else if(inSuite == false){
                if(element.charAt(1) != 'H' || element.charAt(1) != 'S' && element.charAt(0) !='Q'){
                    possibleCardsIdx.push(idx)
                    return element
                }
            }
        }

        //first card played in a new trick
        if(trick.length == 0 && brokenHearts == false && turn != 0){
            if(element.charAt(1) != 'H'){
                possibleCardsIdx.push(idx)
                return element
            }
        }
        if(trick.length == 0 && brokenHearts == true && turn != 0 ||trick.length == 0 && heartsPrevention == true){
            possibleCardsIdx.push(idx)
            return element
        }

        //other cards played in a trick
        if(trick.length != 0 && turn != 0 && inSuite == false){
            possibleCardsIdx.push(idx)
            return element
        }

        if(trick.length != 0 && turn != 0 && inSuite == true ){
            if(inSuite == true && element.charAt(1) == suite){
                possibleCardsIdx.push(idx)
                return element
            }
        }
    })
    // console.log("possible Cards", possibleCards);
    return {possibleCards, possibleCardsIdx}
}

