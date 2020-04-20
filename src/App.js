import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

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
      currentId++;
    };
  };

  return squares;
};

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [mark, setMark] = useState(PLAYER_1);
  const [winner, setWinner] = useState('...');

  const togglePlayer = () => {
    (mark === PLAYER_1) ? setMark(PLAYER_2) : setMark(PLAYER_1);
  }; // helper function that toggles 'X' or 'O'

  const setSquareValue = (id) => {
    if (id >= 0 && id <= 2) {
      squares[0][id].value = mark; // if square is in row 1
    } else if (id >= 3 && id <= 5) {
      squares[1][id-3].value = mark; // if square is in row 2
    } else if (id >= 6 && id <= 8) {
      squares[2][id-6].value = mark; // if square is in row 3
    };
  }; // helper function that changes the value in place

  const onClickCallback = (id) => {
    if (winner !== '...') return; // ceases the board from responding to clicks if there's a winner
    setSquareValue(id);
    setSquares(squares); // updates the board
    checkForWinner();
    togglePlayer();
  };

  const checkForWinner = () => {
    const threeX = ['X', 'X', 'X'];
    const threeO = ['O', 'O', 'O'];

    const rowValues = (row) => {
      return row.map(square => square.value);
    }; // helper function for creating an array of row values

    const colValues = (col) => {
      switch (col) {
        case 1:
          return [squares[0][0].value, squares[1][0].value, squares[2][0].value];
        case 2:
          return [squares[0][1].value, squares[1][1].value, squares[2][1].value];
        case 3:
          return [squares[0][2].value, squares[1][2].value, squares[2][2].value];
        default:
          break;
      };
    }; // helper function for creating an array of column values

    const diagValues = (diag) => {
      return (diag === 1) ? [squares[0][0].value, squares[1][1].value, squares[2][2].value] : [squares[2][0].value, squares[1][1].value, squares[0][2].value];
    }; // helper function for creating an array of diagonal values
  
    const arrayEquals = (one, two) => {
      return JSON.stringify(one) === JSON.stringify(two); 
    }; // helper function from Chelsea's solution posted in the C13 Slack #classroom-support channel

    if ( // win conditions for X
      arrayEquals(rowValues(squares[0]), threeX) || // row 1
      arrayEquals(rowValues(squares[1]), threeX) || // row 2
      arrayEquals(rowValues(squares[2]), threeX) || // row 3
      arrayEquals(colValues(1), threeX) || // column 1
      arrayEquals(colValues(2), threeX) || // column 2 
      arrayEquals(colValues(3), threeX) || // column 3
      arrayEquals(diagValues(1), threeX) || // falling diagonal
      arrayEquals(diagValues(2), threeX) // rising diagonal
      ) {
      setWinner(PLAYER_1); 
      
    } else if ( // win conditions for O
      arrayEquals(rowValues(squares[0]), threeO) || // row 1
      arrayEquals(rowValues(squares[1]), threeO) || // row 2
      arrayEquals(rowValues(squares[2]), threeO) || // row 3
      arrayEquals(colValues(1), threeO) || // column 1
      arrayEquals(colValues(2), threeO) || // column 2 
      arrayEquals(colValues(3), threeO) || // column 3
      arrayEquals(diagValues(1), threeO) || // falling diagonal
      arrayEquals(diagValues(2), threeO) // rising diagonal
      ) {
      setWinner(PLAYER_2); 
    
    } else if (squares.flat().every(square => square.value !== '')) { 
      setWinner('TIE'); // does not trigger until every square has been filled
    };
  };

  const resetGame = () => {
    setSquares(generateSquares());
    setMark(PLAYER_1);
    setWinner('...');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner}</h2>
        <button className="reset" onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
};

export default App;
