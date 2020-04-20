import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

// emojify because why not 😉
const PLAYER_1 = '⚔️';
const PLAYER_2 = '🕸';

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
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);
  const [movesPlayed, setMovesPlayed] = useState(0);

  const onClickCallback = (id) => {
    
    if (winner) return;
    let newSquares = [];

    for (const row of squares) {
      const newRow = [];
      for (const square of row) {
        if (square.id === id && square.value === "") {
          square.value = currentPlayer;
          setMovesPlayed(movesPlayed + 1);
          if (currentPlayer === PLAYER_1) {
            setCurrentPlayer(PLAYER_2);
          } else {
            setCurrentPlayer(PLAYER_1);
          }
        }

        newRow.push(square);
      }

      newSquares.push(newRow);
    } 

    checkForWinner();
    setSquares(newSquares);
  }

  const checkForWinner = () => {

    if (movesPlayed === 9 && winner === null) return;

    for (let i = 0; i < 3; i++) {
      // check rows
      if (squares[i][0].value !== "" &&
        squares[i][0].value === squares[i][1].value &&
        squares[i][0].value === squares[i][2].value) {
          setWinner(currentPlayer);
          return currentPlayer;
        }

      // check columns
      if (squares[0][i].value !== "" &&
        squares[0][i].value === squares[1][i].value &&
        squares[0][i].value === squares[2][i].value) {
          setWinner(currentPlayer);
          return currentPlayer;
        }

      // check downward diagonal
        if (squares[0][0].value !== "" &&
          squares[0][0].value === squares[1][1].value &&
          squares[1][1].value === squares[2][2].value) {
            setWinner(currentPlayer);
            return currentPlayer;
        }

      // check upward diagonal
        if (squares[2][0].value !== "" &&
          squares[2][0].value === squares[1][1].value &&
          squares[2][0].value === squares[0][2].value) {
            setWinner(currentPlayer);
            return currentPlayer;
        }
    }

    return null;
  }

  const newGame = () => {
    // update setSquares, setCurrentPlayer, setMovesPlayed, and setWinner to beginning play state
    setSquares(generateSquares());
    setCurrentPlayer(PLAYER_1);
    setMovesPlayed(0);
    setWinner(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        {(winner === null && movesPlayed === 9) ? <h2>Tie Game!</h2> : null}
        {winner ? <h2>The winner is ... {winner}! </h2> : <h2>Next up: {currentPlayer}</h2>}
        <button className="reset-button" onClick={newGame}>Play Again</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;