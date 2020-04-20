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
  const [currentPlayer, setCurrentPlayer] = useState(true)
  const [winner, setCurrentWinner] = useState(null);
  const [count, setCurrentCount] = useState(0)
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const onClickCallback = (id) => {
    if (winner === "PLAYER_1" || winner === "PLAYER_2") return
    const newSquare = [...squares] 
    let i = 0
    while(i < squares.length){
      let x = 0
      while (x < squares.length){
        if (squares[i][x].id === id && squares[i][x].value === "" ){
          squares[i][x].value = currentPlayer? PLAYER_1 : PLAYER_2;
          setCurrentPlayer(!currentPlayer)
          setCurrentWinner(checkForWinner())
          setCurrentCount(count + 1)
        };    
        x += 1
      }
      i += 1
    }
   setSquares(newSquare);
  }

  const checkForWinner = () => {
    // Complete in Wave 3

    const newSquare = [...squares]
    const flatSquare = newSquare.flat()

    if(flatSquare[0].value !== '' && 
    (flatSquare[0].value === flatSquare[4].value && 
      flatSquare[0].value === flatSquare[8].value) ) {
      if(flatSquare[0].value === 'X') {
        return "PLAYER_1"
      } else {
        return "PLAYER_2"
      };
    } else if (flatSquare[2].value !== '' && 
    (flatSquare[2].value === flatSquare[4].value && 
      flatSquare[2].value === flatSquare[6].value) ) {
        if(flatSquare[2].value === 'X') {
          return "PLAYER_1"
        } else {
          return "PLAYER_2"
        };

      } else {
      let x = 0
      let i = 0
      while(x < flatSquare.length && i < flatSquare.length){
        if (flatSquare[x].value !== "" &&
          flatSquare[x].value === flatSquare[x + 3].value &&
          flatSquare[x].value === flatSquare[x + 6].value){
          if(flatSquare[x].value === 'X') {
            return "PLAYER_1"
          } else {
            return "PLAYER_2"
          }
        }; 

        if (flatSquare[i].value !== "" &&
          flatSquare[i].value === flatSquare[i + 1].value &&
          flatSquare[i].value === flatSquare[i + 2].value){
          if(flatSquare[i].value === 'X') {
            return "PLAYER_1"
          } else {
            return "PLAYER_2"
          };
        };
        x += 1
        i += 3
      }

      if (count === 8 ) {
        return "no one. It's a tie!"
      }; 
    };
    
    
    // else {
    //   while(i < flatSquare.length) {
    //     if (flatSquare[i].value !== "" &&
    //       flatSquare[i].value === flatSquare[i + 1].value &&
    //       flatSquare[i].value === flatSquare[i + 2].value){
    //       if(flatSquare[i].value === 'X') {
    //         return "PLAYER_1"
    //       } else {
    //         return "PLAYER_2"
    //       }
    //     }
    //     i += 3
    //   }
    // } 


    
    
    

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;
