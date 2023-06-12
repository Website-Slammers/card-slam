export const moonShooter =(scores)=>{
    let shot = false;
    let player = 'none';
    console.log('scores',scores)
    if(scores.player1 == 26){
        shot = true;
        player='player1'
    }
    if(scores.player2 == 26){
        shot = true;
        player = 'player2'
    }
    if(scores.player3 == 26){
        shot = true;
        player='player3'
    }
    if(scores.player4 == 26){
        shot= true
        player='player4'
    }
    if(shot == true){
        console.log('moon has been shot!!!')
    }
    return {shot,player}
}