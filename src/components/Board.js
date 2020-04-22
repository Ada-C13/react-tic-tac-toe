import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// Complete this for Wave 1
const generateSquareComponents = (squares, onClickCallback) => {
  const squarePiece = squares.map((squares) => {
    return squares.map(({id, value}) => {
      return (
        <Square
          value={value}
          id={id}
          onClickCallback={onClickCallback}
          key={id}
        />
    );
  }); 
});
return squarePiece
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  // console.log(squareList);
  return <div className="grid" >
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
