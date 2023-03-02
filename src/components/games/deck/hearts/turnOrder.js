//should return which player is playing which card
export const turnOrder = (hands)=>{
    // console.log(hands)
    let startingPlayer = ''
    for (const [key, value] of Object.entries(hands)){
        // console.log(`${key}, ${value}`);
        if(key.includes('2C')){
            startingPlayer = key
        }
    }
    return startingPlayer
}