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
  const [winner, setWinner] = useState("In progress!")

  const onClickCallback = (event) => {
    if (winner === "In progress!") {
      const newSquares = squares.map(row =>
        row.map(square =>
          square.id == [event.target.id] && square.value === '' ? 
            {id: square.id, value: userTurn} : 
            {id: square.id, value: square.value}
        )
      )

      setSquares(newSquares)

      if (checkForWinner(newSquares)) {
        setWinner(checkForWinner(newSquares))
      }
    }

    setTurn(userTurn === PLAYER_1 ? PLAYER_2 : PLAYER_1)
  }

  const checkForWinner = (newSquares) => {

    const currentScoreX = {}
    const currentScoreO = {}

    for (let row in newSquares) {
      for (let square in newSquares[row]) {
        if (newSquares[row][square].value === 'X') {
          currentScoreX[newSquares[row][square].id] = true
        } else if (newSquares[row][square].value === 'O'){
          currentScoreO[newSquares[row][square].id] = true
        }
      }
    }

    const winCombo = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]

    for (let set in winCombo) {
      if (currentScoreX[winCombo[set][0]] && 
        currentScoreX[winCombo[set][1]] && 
        currentScoreX[winCombo[set][2]]) {
          return "Congrats! Winner is Player 1"
      }
    }

    for (let set in winCombo) {
      if (currentScoreO[winCombo[set][0]] && 
        currentScoreO[winCombo[set][1]] && 
        currentScoreO[winCombo[set][2]]) {
          return "Congrats! Winner is Player 2"
      }
    }

    // TODO Double check tie logic
    if (Object.keys(currentScoreX).length + Object.keys(currentScoreO).length === 9) {
      return "Game Over - Tie"
    }

  }

  const resetGame = () => {
    setSquares(generateSquares())
    setTurn(PLAYER_1)
    setWinner("In progress!")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner}</h2>
        <button onClick={resetGame}>Reset Game</button>
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
