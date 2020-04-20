import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  for (let i = 0; i < 9; i++) {
    squares.push({
      id: i,
      value: null,
    })
  }
  return squares;
}

const App = () => {
  const [winner, setWinner] = useState(null);
  const [squares, setSquares] = useState(generateSquares());
  const [numSquaresFilled, setNumSquaresFilled] = useState(0);

  const changeSquare = (i) => {
    console.log(`CLICKED: Square #${i}, value of ${squares[i].value}`);

    if (squares[i].value || winner) return; //do nothing if square is already filled

    setNumSquaresFilled(numSquaresFilled + 1);

    let updatedSquares = [...squares];
    numSquaresFilled % 2 === 0 ? updatedSquares[i].value = PLAYER_1 : updatedSquares[i].value = PLAYER_2
    setSquares(updatedSquares);

    if (numSquaresFilled > 3) {
      console.log(`Placed ${numSquaresFilled} moves... checking for winner...`);
      checkForWinner(i);
    };
  }

  const checkForWinner = (i) => {

    const winConditions = [ //for any given input square, these are the corresponding indexes that must be filled
      [ [1, 2], [4, 8], [3, 6] ],
      [ [0, 2], [4, 7] ],
      [ [0, 1], [4, 6], [5, 8] ],
      [ [0, 6], [4, 5] ],
      [ [0, 8], [1, 7], [2, 6], [3, 5] ],
      [ [3, 4], [2, 8] ],
      [ [0, 3], [2, 4], [7, 8] ],
      [ [6, 8], [1, 4] ],
      [ [0, 4], [6, 7], [2, 5 ] ],
    ]

    for (let x = 0; x < winConditions[i].length; x++) {
      const [a, b] = winConditions[i][x];
      if ( squares[a].value === squares[b].value && squares[a].value === squares[i].value ) { 
        setWinner(squares[a].value);
      }
    }
  }

  const resetGame = () => {
    setWinner(null);
    setSquares(generateSquares());
    setNumSquaresFilled(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner ? `Hooray, ${winner} won!` : `Player ${numSquaresFilled % 2 === 0 ? 'X' : 'O'} is up!`}</h2>
       
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={changeSquare} />
      </main>
    </div>
  );
}

export default App;
