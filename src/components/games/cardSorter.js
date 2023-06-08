
// we'll decide what order we want the cards to sort in for each game later
const numberOrderHearts = ['2','3','4','5','6','7','8','9','1','J','Q','K','A']
const suiteOrderHearts = ['C','D','S','H']


export const cardSorter = (cardArray, gameType)=>{
    let numberOrder = []
    let suiteOrder = []

    if(gameType == 'hearts'){
        numberOrder = numberOrderHearts
        suiteOrder = suiteOrderHearts
    }

    // split the cards into 4 arrays, by suite, then sort them by number order
    let clubs = []
    let diamonds = []
    let spades = []
    let hearts = []
    
    for(let i =0; i< cardArray.length; i++){
        // console.log('weh', cardArray[i].charAt(1))
        switch(cardArray[i].charAt(1)){
            case 'C':
                // console.log(cardArray[i].charAt(1), ' w at')
                clubs = orderSorter(clubs, cardArray[i], numberOrder)
                break;    
            case 'D':
                diamonds = orderSorter(diamonds, cardArray[i], numberOrder)
                break;
            case 'S':
                spades = orderSorter(spades, cardArray[i], numberOrder)
                break;
            case 'H':
                hearts = orderSorter(hearts, cardArray[i], numberOrder)
                break;
            default:
                // console.log('something has gone wrong.')
        }
    }
    // console.log('clubs', ...clubs)
    // console.log('diamonds',...diamonds)
    // console.log('spades',...spades)
    // console.log('hearts', ...hearts)
    let returnArray = [...clubs, ...diamonds, ...spades, ...hearts]

    return returnArray
    

}

function orderSorter(importArray, newCard, numberOrder){
    let suiteArray = [...importArray];
    // console.log(suiteArray)
    let cardValue = numberOrder.indexOf(newCard.charAt(0))
    // console.log(newCard, cardValue)
    if(suiteArray.length===0)
    {
        suiteArray[0] = newCard
    }else{
        // console.log('wtf? ', numberOrder.indexOf(suiteArray[0].charAt(0))>cardValue," ",numberOrder.indexOf(suiteArray[0].charAt(0)),"  ", cardValue)
        if(numberOrder.indexOf(suiteArray[0].charAt(0))>cardValue){
            suiteArray.unshift(newCard)
            
            // console.log("here")
        }else{
            for(let i =0; i<suiteArray.length; i++){
                let handValue = numberOrder.indexOf(suiteArray[i].charAt(0))
                // console.log('card value ',  cardValue,'hand value, ', handValue)
                // console.log('new card ', newCard, 'suite Card', suiteArray[i])
                if(handValue> cardValue){
                    suiteArray.splice(i,0,newCard)
                    i =100
                    
                }
                else if(cardValue > handValue && i+1 == suiteArray.length){
                    suiteArray.push(newCard)
                    i =100
                }
            }
        }
    }
    // console.log(suiteArray)
    return suiteArray
}