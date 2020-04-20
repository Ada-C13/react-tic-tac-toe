import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


// We de-structured here, so using squares.whatever instead of props.whatever
const SquareComponents = ( {squares, onClickCallback}) => {

  const generateSquareComponents = squares.flat().map((square) => {

    return (
        <Square
          id={square.id}
          value={square.value} 
          key={square.id}
          onClickCallback={onClickCallback}
          
        />
    );
  });
  return generateSquareComponents;
};

// This is destructoring - takes the place of props.whatever
const Board = ({ squares, onClickCallback }) => {
  return <div className="grid">
    <SquareComponents squares={squares} onClickCallback={onClickCallback} />
  </div>
  
};

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
