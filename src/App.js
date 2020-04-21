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
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const onClickCallback = (id) => {
    if (winner !== null) return;
    const newBoard = [...squares];

    for (let i = 0; i < 3; i++){
      for (var j = 0; j < 3; j++){
        let currentSquare = newBoard[i][j];  
        if (currentSquare.id === id) {
          if (currentSquare.value !== '') return;
          currentSquare.value = setTurn? PLAYER_1 : PLAYER_2;

          setTurn(!turn);
        }
      }
    }

    console.log(checkForWinner());
    setWinner(checkForWinner());
    setSquares(newBoard);
  
  }

  const checkForWinner = () => {
    const winningBoards = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < 3; i++) {
      const [a, b, c] = winningBoards[i];
      if (a === "" || b === "" || c === "") {
        return null;
      } 
    }

    for (let i = 0; i < winningBoards.length; i++) {
      const [a, b, c] = winningBoards[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        let player = "";
        squares[a] === 'X' ? player = 'X"s' : player = 'O"s';
        return player;
      }
    }

    return 'No one!';
  }

  const resetGame = () => {
    setSquares(generateSquares());
    setTurn(true);
    setWinner(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        {winner ? <h2>{`The winner is ${winner}`}</h2> : null}
        <button className="reset" onClick={resetGame} >Reset Game </button>
      </header>
      <main>
        <Board squares={squares}
        onClickCallback = {onClickCallback}
        />
      </main>
    </div>
  );

}

export default App;
