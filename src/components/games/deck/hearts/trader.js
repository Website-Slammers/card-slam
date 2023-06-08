// it's gonna be hard to not just flesh this program out with super ai
import {tradeRotation} from './tradeRotation'

export const trader =(hand1,hand2,hand3,hand4,playerChoice)=>{
    const [tradeDirection,setTradeDirection]= useState('R')
    let trade1= playerChoice;
    let trade2= aiChoice2;
    let trade3= aiChoice3;
    let trade4= aiChoice4;

    // remove cards from each players hand then put them into the other players hand, then sort
    switch (tradeDirection){
        case 'R':
            break;
        case 'L':
            break;
        case 'F': 
            break;       
        case 'N': 
            break;
        default:
            console.log('something went wrong')
    }

    setTradeDirection(tradeRotation(tradeDirection))
}