import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: "",
      });
      currentId += 1;
    }
  }
  return squares; // array of arrays
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);

  
  const onClickCallback = (clickedOnSquare) => {
    const squaresNew =[]
    squares.forEach( (squareArray) => {
      const tempArray = []
      squareArray.forEach( (square) => {
        if(square.id === clickedOnSquare.id && square.value === "" && winner === null) {
          clickedOnSquare.value = currentPlayer
          tempArray.push(clickedOnSquare)
          currentPlayer === PLAYER_1 ? setPlayer(PLAYER_2) : setPlayer(PLAYER_1)
    
        }
        else{
          tempArray.push(square)
        };

      })
      squaresNew.push(tempArray)
    })
    setSquares(squaresNew)
    checkForWinner(squaresNew)
  };
    

  const checkForWinner = (squaresArray) => {

    // checking diagonals
    if ( squaresArray[0][0].value === squaresArray[1][1].value && squaresArray[0][0].value === squaresArray[2][2].value && squaresArray[0][0].value !=="") {
      setWinner(squaresArray[0][0].value)
    } 
    else if ( squaresArray[2][0].value === squaresArray[1][1].value && squaresArray[2][0].value === squaresArray[0][2].value && squaresArray[2][0].value !=="") {
      setWinner(squaresArray[2][0].value)
    } 

    // checking verticals & horizontals
    for(let i = 0; i < 3; i++) {
       if ( squaresArray[0][i].value === squaresArray[1][i].value && squaresArray[0][i].value === squaresArray[2][i].value && squaresArray[0][i].value !=="" ) {
        setWinner(squaresArray[0][i].value)
       } 
       else if ( squaresArray[i][0].value === squaresArray[i][1].value && squaresArray[i][0].value === squaresArray[i][2].value && squaresArray[i][0].value !=="" ) {
        setWinner(squaresArray[i][0].value)
       } 
    }

    // checking for tie
    let numFilledSquares = 0

    squaresArray.forEach( (squaresRow) => {
      let countPerRow = squaresRow.filter( square => {
        return square.value !==""
      })
      numFilledSquares += countPerRow.length
    })
    
    if(numFilledSquares === 9) {
      setWinner("Tie")
    };
  }

  const resetGame = () => {
    setSquares(generateSquares())
    setWinner(null)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is <em>{winner}</em></h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
}

export default App;
