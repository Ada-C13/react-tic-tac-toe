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
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [userTurn, setTurn] = useState(PLAYER_1)

  const onClickCallback = (event) => {

    const newSquares = squares.map(row =>
      row.map(square =>
        square.id == [event.target.id] && square.value === '' ? 
          {id: square.id, value: userTurn} : 
          {id: square.id, value: square.value}

      )
    )

    setSquares(
      newSquares
    )

    // TODO Need to make sure only runs if the square is actually changing
    setTurn(
      userTurn === PLAYER_1 ? PLAYER_2 : PLAYER_1
    )

    checkForWinner()
  }

  const checkForWinner = () => {

    const currentScoreX = {}
    const currentScoreO = []
    // console.log(squares)

    for (let row in squares) {
      for (let square in squares[row]) {
        if (squares[row][square].value === 'X') {
          currentScoreX[squares[row][square].id] = true
        } else if (squares[row][square].value === 'O'){
          currentScoreO.push(squares[row][square].id)
        }
      }
    }

    const winCombo = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for (let set in winCombo) {
      if (currentScoreX[winCombo[set][0]] && 
        currentScoreX[winCombo[set][1]] && 
        currentScoreX[winCombo[set][2]]) {
          console.log("Winner is here!")
      }
    }


    // console.log(currentScoreX)
    // console.log(currentScoreO)

    return (
      squares
    )
  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board 
          squares={squares} 
          onClickCallback={onClickCallback} 
        />
      </main>
    </div>
  );
}

export default App;
