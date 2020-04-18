import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const initialSquares = [];
  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {

    initialSquares.push([]);
    for (let col = 0; col < 3; col += 1) {
      initialSquares[row].push({
        id: currentId,
        value: "",
      });
      currentId += 1;
    }

  }

  return initialSquares;
}

// App component
const App = () => {

  // State
  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer]   = useState(PLAYER_1);

  // Callback function for square click
  const onClickCallback = (id) => {

    // calculates row and col from the id
    const row = Math.floor(id / 3);
    const col = id % 3;
    
    if (squares[row][col].value === "") {
      // if square available, mark it for the player
      squares[row][col].value = player;
      setSquares(squares);

      // change to next player
      setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    }

  }

  const checkForWinner = () => {
    // Complete in Wave 3

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <h2>Player is {player} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );

}

export default App;
