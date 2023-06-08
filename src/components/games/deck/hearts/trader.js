// it's gonna be hard to not just flesh this program out with super ai
import {tradeRotation} from './tradeRotation'

export const trader =(hand1,hand2,hand3,hand4,playerChoice)=>{
    const [tradeDirection,setTradeDirection]= useState('R')
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