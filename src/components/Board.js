import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  let squareComponents = [];
  for(let i=0; i < squares.length; i++){
    for(let j=0; j < squares.length; j++){
      squareComponents.push(<Square key={squares[i][j].id} value={squares[i][j].value} id={squares[i][j].id} onClickCallback={onClickCallback} />);
    }
  }
  return squareComponents;
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
