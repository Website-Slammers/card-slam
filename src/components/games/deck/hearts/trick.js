//should recieve trick info and say who won the trick(setting the next 1st player)
//as well as return how many points were won

export const trickWin = (trick,hands)=>{
    let order = ['2','3','4','5','6','7','8','9','1','J','Q','K','A']
    let winningCard = trick[0]
    let playerWin = 'oops!'
    let points = 0
    // console.log(hands)
    // console.log(trick)

    let suit = trick[0].charAt(1)

    // console.log(suit)
    //hahaha who wrote this. it says if the suit is correct and the order of the card is right 
    //a certain card gets the winning card spot 
    
    for(let i = 0; i<4 ;i++){
        if(suit == 'H'){
            points += 1
        }else if(suit == 'S' && trick[i].charAt(1) == 'Q'){
            points += 13
        }

        if( order.indexOf(winningCard.charAt(0)) < order.indexOf(trick[i].charAt(0)) && trick[i].charAt(1) == suit){
            winningCard = trick[i]
        }
        
    }
    // console.log('winning card', winningCard)
    //no switch statement, feeling lazy
    if(hands.player1.includes(winningCard)) playerWin = `player1` 
    if(hands.player2.includes(winningCard)) playerWin = `player2` 
    if(hands.player3.includes(winningCard)) playerWin = `player3` 
    if(hands.player4.includes(winningCard)) playerWin = `player4` 
    
    console.log(playerWin, points)
    return {playerWin,points}
}