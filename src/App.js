import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

// const PLAYER_1 = 'X';
// const PLAYER_2 = 'O';


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
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(false);
  const [whoWins, setWhoWins] = useState()
  //const [boardFull, setBoardFull] = useState(false);
  const whosUp = (xTurn ? "X" : "O");

  const onClickCallback = (id) => {
    let newSquares = [];
    
    squares.forEach((row) => {
      let newRow = [];
      row.forEach((squareComponent) => {
        if ((squareComponent.id === id) && (squareComponent.value === '')) {
          squareComponent = {
            id: id,
            value: whosUp
          }
          newRow.push(squareComponent);
          setXTurn(!xTurn);
        } else {
          newRow.push(squareComponent);
        }
      })
      newSquares.push(newRow);
    });
  
    setSquares(newSquares);
    checkForWinner(newSquares);
  } 

  const checkForWinner = (squares) => { 
    for(let i = 0; i < squares.length; i++) {
      // if any rows are the same
      if ((squares[i][0].value === squares[i][1].value ) && (squares[i][1].value === squares[i][2].value ) && squares[i][0].value !== '') {
        setWinner(true);
        if (squares[i][0].value === 'X') {
          setWhoWins("PLAYER 1");
        } else {
          setWhoWins("PLAYER 2");
        }

      // if any columns are the same
      } else if ((squares[0][i].value ===squares[1][i].value) && (squares[0][i].value===squares[2][i].value) && squares[0][i].value !== '') {
        setWinner(true);
        if (squares[0][i].value === 'X') {
          setWhoWins("PLAYER 1");
        } else {
          setWhoWins("PLAYER 2");
        }

      // any diagonals  
      } else if ((squares[0][0].value===squares[1][1].value) && (squares[1][1].value===squares[2][2].value) && squares[0][0].value !== ''){
        setWinner(true);
        if (squares[0][0].value === 'X') {
          setWhoWins("PLAYER 1");
        } else {
          setWhoWins("PLAYER 2");
        }
        
      } else if ((squares[0][2].value===squares[1][1].value) && (squares[1][1].value===squares[2][0].value) && squares[0][2].value !== '') {
        setWinner(true);
        if (squares[0][2].value === 'X') {
          setWhoWins("PLAYER 1");
        } else {
          setWhoWins("PLAYER 2");
        }
      }
    }
  }

  const resetGame = () => {
    setXTurn('X');
    setWhoWins();
    setSquares(generateSquares());
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is...{whoWins}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
}

export default App;