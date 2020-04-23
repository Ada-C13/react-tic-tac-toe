import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const WINNING_SCENARIOS = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 6]
]

const generateSquares = () => {
  const squares = [];
  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares; // array of 3 row arrays with 3 objects
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);

  const updateSquares = (id) => {
    if (winner !== null) return; // stop game after winner declared
    let newSquares = [...squares];

    // find clicked Square, then update it's value
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        let selectedSquare = newSquares[row][col];
        if (selectedSquare.id === id) {
          if (selectedSquare.value === '') {
            selectedSquare.value = currentPlayer;
            newSquares[row][col] = selectedSquare;
          }         
        }
      }
    }
    
    setSquares(newSquares);
    setWinner(checkForWinner(squares));
    // switch players
    currentPlayer === PLAYER_1 ? setCurrentPlayer(PLAYER_2) : setCurrentPlayer(PLAYER_1)
  }

  const checkForWinner = () => {
    // get values of each square in order
    const squareValues = [];
    
    squares.map(row => 
      row.map(square => ( 
        squareValues.push(square.value)
        )
      )
    )

    // check against WINNING_SCENARIOS
    for (let line of WINNING_SCENARIOS) {
      // check for 3 of same value in a line
      if (squareValues[line[0]] === squareValues[line[1]] && squareValues[line[0]] === squareValues[line[2]] && squareValues[line[0]] !== '') {
        console.log(squareValues[line[0]]);
        return squareValues[line[0]]; // return winner
      }  
    }

    if (!squareValues.includes("")) return "tied";
    return null; 
  }

  const resetGame = () => {
    setSquares(generateSquares);
    setWinner(null);
    setCurrentPlayer(PLAYER_1);  
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{(winner === null) ? `` : `The winner is ${ winner }` } </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares}/>
      </main>
    </div>
  )
  
}

export default App;
