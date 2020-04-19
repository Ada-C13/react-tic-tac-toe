import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

// Declare constants used for game status
const PLAYER_1 = 'X';
const PLAYER_2 = 'O';
const NOPLAYER = '' ;
const GAMETIED = '#';

// Generates an empty set of squares to start the game
const generateSquares = () => {
  const initialSquares = [];
  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {

    initialSquares.push([]);
    for (let col = 0; col < 3; col += 1) {
      initialSquares[row].push({
        id: currentId,
        value: NOPLAYER,
      });
      currentId += 1;
    }

  }

  return initialSquares;
}

// App component
const App = () => {

  // Declare and initialize state
  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer]   = useState(PLAYER_1);
  const [winner, setWinner]   = useState(NOPLAYER);

  // Callback function for square click
  const onClickCallback = (id) => {

    // calculates row and col from the id
    const row = Math.floor(id / 3);
    const col = id % 3;
    
    if (squares[row][col].value === NOPLAYER && winner === NOPLAYER) {
      // if square available, mark it for the player
      const updatedSquares = Array.from(squares);
      updatedSquares[row][col].value = player;
      setSquares(updatedSquares);

      // change to next player
      setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    }

  }

  // Check if a set of squares is a winner
  const checkForThree = (row1, col1, row2, col2, row3, col3) => {
    if (squares[row1][col1].value === squares[row2][col2].value &&
        squares[row1][col1].value === squares[row3][col3].value &&
        squares[row1][col1].value !== NOPLAYER &&
        winner === NOPLAYER) {
          setWinner(squares[row1][col1].value);
    }
  }

  // Check if all squares are taken and there is no winner
  const checkForTie = () => {

    if (winner === NOPLAYER) {
      let filledSquares = 0;
      for (let row = 0; row < 3; row += 1) {
        for (let col = 0; col < 3; col += 1) {
          if (squares[row][col].value !== NOPLAYER) {
            filledSquares += 1;
          }
        }
    
      }

      if (filledSquares === 9) {
        setWinner(GAMETIED);
      }
    }

  }

  // Checks all eight possible winning combinations, plus ties
  const checkForWinner = () => {
    for (let i = 0; i < 3; i++) {
      checkForThree(i, 0, i, 1, i, 2);
      checkForThree(0, i, 1, i, 2, i);
    }
    checkForThree(0, 0, 1, 1, 2, 2);
    checkForThree(2, 0, 1, 1, 0, 2);
    checkForTie();
  }

  // Reset state for a new game
  const resetGame = () => {
    setSquares(generateSquares());
    setPlayer(PLAYER_1);
    setWinner(NOPLAYER);
  }

  // Check if one of the players won
  checkForWinner();

  // Creates the right message to show at the top
  const message = winner === NOPLAYER ? `Player is ${player}` :
                  winner === GAMETIED ? `Game is tied` : `Winner is ${winner}`;

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{message}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );

}

export default App;