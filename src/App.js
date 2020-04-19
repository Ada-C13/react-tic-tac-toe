import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row++) {
    squares.push([]);
    for (let col = 0; col < 3; col++) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer] = useState(PLAYER_1)
  const [winner, setWinner] = useState(null)
  const [filledSquareCount, setFilledSquareCount] = useState(1)

  const onClickCallBack = (id) => {

    setFilledSquareCount(filledSquareCount + 1);
    // set it to stop when winner detected 
    const newSquares = [];
    squares.forEach(row => {
      const newRow = []
      row.forEach(square => {
        if (square.id === id) {
          square.value = player
          setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1);
          //could eventually set it so it can only be changed once
          checkForWinner();
          console.log(filledSquareCount)
        }
        newRow.push(square)
      })
      newSquares.push(newRow)
    })
    setSquares(newSquares);
  };


  const checkForWinner = () => {
    
    let squareValues = []
    squares.forEach(row => {
      squareValues.push(row[0].value, row[1].value, row[2].value)
    });

    WINNING_COMBOS.forEach(row=> {
        if(squareValues[row[0]] !== "" && squareValues[row[0]] === squareValues[row[1]] && squareValues[row[1]] === squareValues[row[2]]){
          return setWinner(squareValues[row[0]]);
        } else if (filledSquareCount === 9){
          return setWinner('tie');
        };
      });
      return null;
  };

  const resetGame = () => {
    setSquares(generateSquares)
    setFilledSquareCount(1)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... {winner}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallBack} />
        {/* since not using () onClickCallBacl we are referenceing the function, not calling the function */}
      </main>
    </div>
  );
}

export default App;
