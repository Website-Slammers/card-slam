//should return which player is playing which card
export const turnOrder = (hands,currentPlayer)=>{
    // console.log(hands)
    if(!currentPlayer){
        let startingPlayer = ''
        for (const [key, value] of Object.entries(hands)){
            // console.log(`${key}, ${value}`);
            if(value.includes('2C')){
                currentPlayer = key
            }
        }
    }else{
        if(currentPlayer.charAt(-1) == '4'){
            currentPlayer = 'player1'
        }else{
            currentPlayer = 'player'+currentPlayer.charAt(-1)+1
        }
        
    }
    console.log('yo, ', currentPlayer)
    return currentPlayer
}