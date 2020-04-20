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
  const [player1Turn, setplayer1Turn] = useState(true);
  const [winner, setWinner] = useState(null);

  const updateSquare = (id) => {
    if (winner !== null) return;
    const squaresNew = [...squares];

    for (let i = 0; i < 3; i++){
      for (var j = 0; j < 3; j++){
        let currentSquare = squaresNew[i][j];  
        if (currentSquare.id === id) {
          
          // if square already filled in, exit loop
          if (currentSquare.value !== '') return;
          
          currentSquare.value = player1Turn? PLAYER_1 : PLAYER_2;

          setplayer1Turn(!player1Turn);
        }
      }
    }

    console.log(checkForWinner());
    setWinner(checkForWinner());
    setSquares(squaresNew);
  }


  const checkForWinner = () => {
    // get all possible combos of winning solutions
    const winningSolutions = [
      [squares[0][0].value, squares[0][1].value, squares[0][2].value],
      [squares[1][0].value, squares[1][1].value, squares[1][2].value],
      [squares[2][0].value, squares[2][1].value, squares[2][2].value],
      [squares[0][0].value, squares[1][0].value, squares[2][0].value],
      [squares[0][1].value, squares[1][1].value, squares[2][1].value],
      [squares[0][2].value, squares[1][2].value, squares[2][2].value],
      [squares[0][0].value, squares[1][1].value, squares[2][2].value],
      [squares[0][2].value, squares[1][1].value, squares[2][0].value]
    ]

    for (let i = 0; i < 8; i++) {
      // destructuring each winning solution
      const [first, second, third] = winningSolutions[i];
      
      if (first && first === second && first === third) {
        // assignment of winner based off X or O
        let player = "";
        first === 'X'? player = 'Player 1' : player = 'Player 2';
        return player;
      }
    }

    // handling continuing the game
    for (let i = 0; i < 3; i ++) {
      const [first, second, third] = winningSolutions[i];
      if (first === "" || second === "" || third === "") {
        return null;
      }
    }

    // when all squares are filled
    return 'no one, it\'s a tie';
  }

  const resetGame = () => {
    setSquares(generateSquares());
    setplayer1Turn(true);
    setWinner(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner? `The winner is ${ winner }!` : player1Turn? 'Player 1 - X': 'Player 2 - O'}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board 
          squares = {squares} 
          onClickCallback = {updateSquare}
        />
      </main>
    </div>
  );
}

export default App;
