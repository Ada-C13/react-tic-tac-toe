import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  const flatArray = squares.flat();     // flat() given to me from Shonda! We want to make a 2d array 1d
  const allSquares = flatArray.map((singleSquare, i) => {
    return (
     
        <Square 
          id={singleSquare.id}
          key={singleSquare.id}
          value={singleSquare.value}
          onClickCallback={onClickCallback}
          // playerTurn={playerTurn}
        />
    
    );
  });
  return allSquares;
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
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
  playerTurn: PropTypes.func.isRequired,
};

export default Board;
