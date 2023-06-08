//nice.
export const turnStart =(hands)=>{
    // console.log('right here', hands)
    if(hands.player1){
        if(hands.player1.includes('2C')) return `player1` 
        if(hands.player2.includes('2C')) return `player2` 
        if(hands.player3.includes('2C')) return `player3` 
        if(hands.player4.includes('2C')) return `player4` 
    }
}
