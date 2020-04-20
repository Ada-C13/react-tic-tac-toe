import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // spread 2-D squares array into single allSquares array
  const allSquares = [].concat(...squares);

  return allSquares.map(square => {
    return (
      <Square
        key={square.id}
        id={square.id}
        value={square.value}
        onClickCallback={onClickCallback}
      />
    )
  });
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  return (
    <div className="grid">
      {squareList}
    </div>
  )
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