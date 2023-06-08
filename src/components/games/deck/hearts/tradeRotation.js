export const tradeRotation = (direction) =>{
    let newDirection ='R'
    switch (direction){
        case 'R': 
            newDirection ='L';
            break;
        case 'L':
            newDirection ='F';
            break;
        case 'F':
            newDirection ='N';
            break;
        case 'N':
            newDirection ='R';
            break;
        default:
            console.log('something has gone wrong')    
    }
    return newDirection

}