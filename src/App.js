import React, { useState } from "react";
import "./App.css";

import Board from "./components/Board";

const PLAYER_1 = "X";
const PLAYER_2 = "O";

const generateSquares = () => {
	const squares = [];

	let currentId = 0;

	for (let row = 0; row < 3; row += 1) {
		squares.push([]);
		for (let col = 0; col < 3; col += 1) {
			squares[row].push({
				id: currentId,
				value: "",
			});
			currentId += 1;
		}
	}

	return squares;
};

const App = () => {
	const [squares, setSquares] = useState(generateSquares());

	const [player, setPlayer] = useState(PLAYER_1);

	// Wave 2
	// You will need to create a method to change the square
	//   When it is clicked on.
	//   Then pass it into the squares as a callback

	const onClickCallback = (id) => {
    if (checkForWinner() != null ){
      return;
    };
		const newSquares = [];
		squares.forEach((row) => {
      const newRow = [];
			row.forEach((square) => {
				if (square.id === id) {
          square.value = player;
          setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1);
          checkForWinner();
				}
				newRow.push(square);
			});
			newSquares.push(newRow);
		});
    
		setSquares(newSquares);

		// console.log(player + id);
	};

	const checkForWinner = () => {
    let squaref =  squares.flat().map(square => ({id:square.id, value:square.value }))

		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < winningCombinations.length; i++) {
			const [a, b, c] = winningCombinations[i];
			if (
				squaref[a].value != '' &&
				squaref[a].value === squaref[b].value &&
				squaref[a].value === squaref[c].value
			) {
				return squaref[a].value;
			}
		}
		return null;
	};

	const resetGame = () => {
		setSquares(generateSquares());
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>React Tic Tac Toe</h1>
				<h2>The winner is ... {checkForWinner()} </h2>
				<button onClick= {resetGame}>Reset Game </button>
			</header>
			<main>
				<Board squares={squares} onClickCallback={onClickCallback} />
			</main>
		</div>
	);
};

export default App;
