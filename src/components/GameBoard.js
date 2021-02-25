import  {useState} from 'react';
import Square from './Square';

const GameBoard = () => {

    //we need current player and gameState
    const [currentPlayer, setCurrentPlayer] = useState("X");

    const emptyGame =[
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null}
        ]
    const [gameState, setGameState] = useState(emptyGame);

    const [moves, setMoves] = useState(0);

    const executeMove = (index) =>{
        console.log(index);
        let newGameState = gameState;
        if(newGameState[index].value===null){
    //set the current mark
    // means by clicking on a box just change the newGame state for that index as whatever is in current player
        newGameState[index].value = currentPlayer;
        setGameState(newGameState);
     //change the current player
        let nextPlayer = currentPlayer === "X" ? "O" : "X";
        setCurrentPlayer(nextPlayer);
        console.table(gameState);
        
        //after every new move check for win
        let result = checkWinOrDraw();
        console.log(result);
        if(result !== false){
            alert(`Player ${result} wins`);
        };
        let moveNumber = moves +1;
        setMoves(moveNumber);
        if(moveNumber==9){
            alert('Game is Draw');
        }
        }
}
  //check for winning condition
const checkWinOrDraw = () => {

    let win = false;
    const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
    for(let i=0; i<lines.length; i++){
        const [a,b,c] = lines[i];
    if(gameState[a].value && (gameState[a].value === gameState[b].value) && 
    (gameState[b].value === gameState[c].value)){
           win = gameState[a].value;
        }
    }
    return win;
       //check if all fill and no win then draw
       
        
}
const playAgain = () => {
    setGameState(emptyGame);
    setCurrentPlayer("X");
}
 

    return (
        <>
        <div className="col-md-12 col-12
        text-center">
            <h2>Current Player: {currentPlayer}</h2>
            <h2>
                <button onClick={playAgain}>Play again</button>
            </h2>
            
        </div>
        <div className="bg-white
         col-md-6
          offset-md-3
           gameBoard
            shadow-sm
             row 
             p-4">
                 {gameState.map((square, key) => (
                     <Square key={key} gameState={gameState} index={key}
                     executor={executeMove}/>
                 ))} 
             </div>
        </>
    );
};

export default GameBoard;