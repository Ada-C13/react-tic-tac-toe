import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// Generate each square of each row into the table.
const generateSquareComponents = (squares, onClickCallback) => {
  const boardSquares = [];

  for (let squareRow of squares) {
    for (let square of squareRow) {
      boardSquares.push(
        <Square
          id={square.id}
          value={square.value}
          disabled={square.disabled}
          onClickCallback={onClickCallback}
          key={square.id}
        />
      );
    };
  };

  return boardSquares;
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  return <div className="grid">
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
