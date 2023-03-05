
export const possibleCards =(rHand,trick,turn)=>{
    let possibleCards = [...rHand]
    let possibleCardsIdx = []
    let inSuite = false;
    let suite = 0
    let newTrick = trick
    console.log(newTrick);
    if(newTrick && newTrick[0])suite = newTrick[0].charAt(1)
    // console.log('ello')
    // inSuite is true if the suite is in the handarray that is being played 
    for(let i = 0; i< possibleCards.length; i++){
        if(possibleCards[i].charAt(1) == suite){
            inSuite = true;
        }
    }
    //turn0 algorythm 

    possibleCards = possibleCards.filter((element, idx)=>{
        if(turn == 0){
            if(inSuite == true && element.charAt(1) == suite){
                possibleCardsIdx.push(idx)
                return element
            }else if(inSuite == false && element.charAt(1) != 'H'){
                possibleCardsIdx.push(idx)
                return element
            }
        }
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

