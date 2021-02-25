import React from 'react';

const Square = ({index, executor, gameState}) => {
    

    //for drawing borders on expected positions
    const drawGrid = index => {
        let borderString = "";

        if(index < 3){
            borderString += "bb";
        }
         else if(index >= 6){
            borderString += "bt";
        }

        if(index ===1 || index === 4 || index === 7){
            borderString += " bsb";
        }
       return borderString;
    }
    return (
        <>
             <div className={`x10 text-center gameSquare ${drawGrid(index)}`}
             onClick={e => executor(index)}>
                 {gameState[index].value}
                 </div>      
        </>
    );
};

export default Square;