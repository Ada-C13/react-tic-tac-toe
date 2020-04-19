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
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer] = useState(PLAYER_1)

  const onClickCallBack = (id) => {
    // console.log(id)
      const newSquares = [];
      squares.forEach(row => {
        const newRow = []
        row.forEach(square => {
          if (square.id === id) {
            square.value = player
            setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1)
            //could eventually set it so it can only be changed once
          }
          newRow.push(square)
        })
        newSquares.push(newRow)
      })
      setSquares(newSquares);
  }
  //we define it in app bc the funtion will nn access to the state of the gam e
  //we need to call the function in squre bc thats where the button is 
  //responsible for knowing when something happens to it 


  const checkForWinner = () => {
    // Complete in Wave 3

  }

  const resetGame = () => {
    setSquares(generateSquares)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallBack} />
        {/* since not using () onClickCallBacl we are referenceing the function, not calling the function */}
      </main>
    </div>
  );
}

export default App;
