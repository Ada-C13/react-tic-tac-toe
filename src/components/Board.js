import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

const generateSquareComponents = (squares, onClickCallback) => {

  const squareComponents = squares.map(square => <Square
    key={square.id} 
    id={square.id}
    value={square.value}
    isWinner ={square.isWinner}
    onClickCallback={onClickCallback}/> )

  return squareComponents;
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
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string
      })
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
