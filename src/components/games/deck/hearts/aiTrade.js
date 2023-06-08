// writing the logic for the AI trade
// question is, what should be my logic?
// Ai should focus on getting rid of suits in their hand(imo)
// Then High cards



export const aiTrade = (hand) =>{
    let tradedCards = []
    let clubs = []
    let diamonds = []
    let spades = []
    let hearts = []
    
    //sort the hands into individual arrays that keep track of the suit cards
    for(let i =0; i<hand.length; i++){
        switch (hand[i].charAt(1)){
            case 'C':
                clubs.push(hand[i])
                break;
            case 'D':
                diamonds.push(hand[i])
                break;
            case 'S':
                spades.push(hand[i])
                break;
            case 'H':
                hearts.push(hand[i])
                break;
        }
    }

    //remove all suits possible in trades based on danger of suit
    if( hearts.length<3 && hearts.length>0 && tradedCards.length + hearts.length < 3){
        for(let j=0; j<hearts.length; j++){
            tradedCards.push(hearts[j])
        }
        hearts = []
    }
    if(spades.length<3 && spades.length>0 && tradedCards.length+spades.length <3){
        for(let k=0; k<spades.length; k++){
            tradedCards.push(spades[k])
        }
        spades = []
    }
    if(diamonds.length<3 && diamonds.length>0 && tradedCards.length+diamonds.length<3){
        for(let l=0; l<diamonds.length; l++){
            tradedCards.push(diamonds[l])
        }
        diamonds = []
    }
    if(clubs.length<3 && clubs.length>0 && tradedCards.length+clubs.length<3){
        for(let m=0; m<clubs.length;m++){
            tradedCards.push(clubs[m])
        }
        clubs = []
    }
    if(spades.includes('QS') && tradedCards.length <3){
        tradedCards.push('QS')
        spades.splice(spades.indexOf('QS'),1)
    }
    //this code should prioritize face value cards for trade and then the highest value cards
    while(tradedCards.length<3){
        if(hearts.length>0){
            tradedCards.push(hearts.pop())
        }
        if(spades.length>0){
            tradedCards.push(spades.pop())
        }
        if(diamonds.length>0){
            tradedCards.push(diamonds.pop())
        }
        if(clubs.length>0){
            tradedCards.push(clubs.pop())
        }
    }
    return (tradedCards)
}