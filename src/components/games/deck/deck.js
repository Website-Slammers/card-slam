// spit out a card and also maintain the orginization of the array (as in the cards left)

// suite second card number 1st doesn't have jokers........................yet
const cardDeck = [
    'AC','2C','3C','4C','5C','6C','7C','8C','9C','1C','JC','QC','KC',
    'AS','2S','3S','4S','5S','6S','7S','8S','9S','1S','JS','QS','KS',
    'AD','2D','3D','4D','5D','6D','7D','8D','9D','1D','JD','QD','KD',
    'AH','2H','3H','4H','5H','6H','7H','8H','9H','1H','JH','QH','KH'
]

let pullDeck = JSON.parse(JSON.stringify(cardDeck))

console.log(pullDeck);

function pullAHand(pullDeck, handSize, players, jokers = false){
    pullDeck = JSON.parse(JSON.stringify(cardDeck))
    let playerHands = {}
    for(let i = 1;i<players+1; i++){
        if(!playerHands['player'+i]) playerHands['player'+i] = []
        else playerHands['player'+i] = []
        for(let hand=0; hand<handSize; hand++){
            let draw = Math.floor(Math.random()*pullDeck.length);
            playerHands['player'+i].push(pullDeck[draw])            
            pullDeck.splice(draw,1)
        }
    }
    return playerHands
}

console.log(pullAHand(pullDeck, 13, 4))
console.log(pullAHand(pullDeck, 7, 4))

function shuffle(pullDeck, discard){
    pullDeck = [...discard]
}