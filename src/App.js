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
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState();

  const onClickCallback = (event) => { // Event Handler
    let updatedGrid = [];
    // resource : R.Quin zoom chat
    for(let i = 0; i < squares.length; i++) {
      for(let j = 0; j < squares.length; j++) {
        if (event === squares[i][j].id) {
          squares[i][j]["value"] = (swapPlayers() ? PLAYER_2 : PLAYER_1);
        }
      }
      updatedGrid.push(squares[i]);
    }
    setSquares(updatedGrid);
    checkForWinner();
  }

  function swapPlayers() {
    setPlayer(!player);
    return player;
  };

  const checkForWinner = () => {
    // resource: https://www.pubnub.com/blog/build-a-multiplayer-tic-tac-toe-game-in-react/
    const winnerCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // Iterate and check if there is a winning combination or tie
    let arraySquares = squares.flat();

    for (let i = 0; i < winnerCombination.length; i++) {

      const [a, b, c] = winnerCombination[i];

      if (arraySquares[a].value && arraySquares[a].value === 
          arraySquares[b].value && arraySquares[a].value === 
          arraySquares[c].value) {

        setWinner(`${arraySquares[a].value}`);

        return;
      };
    };

    let noMoreSquares = 0;
    for (let square of arraySquares) {
      if (square.value === '') {
        (noMoreSquares ++)
      };
    };

    if (noMoreSquares === 0) {setWinner('tie')}
  };    
  
  const resetGame = () => {
    setSquares(generateSquares());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... {winner} </h2>
        <button className="button" onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} winner={winner}/>
      </main>
    </div>
  );
};

export default App;
