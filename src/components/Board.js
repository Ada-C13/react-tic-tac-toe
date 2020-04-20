import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {

  let squaresOnBoard = []
  for(let row = 0; row<squares.length; row++){
    for(let col = 0; col<squares[row].length; col++){
      squaresOnBoard.push(
      <Square 
        onClickCallback={onClickCallback} 
        id={squares[row][col].id} 
        value={squares[row][col].value}
        key={squares[row][col].id}
      />
      )
    }
  };

  return squaresOnBoard
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
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
