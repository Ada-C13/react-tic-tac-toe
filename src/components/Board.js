import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  
  const allSquares = []
  
  squares.forEach((row) => {
    row.forEach((square) => {
        allSquares.push(
          <Square 
          key={square.id}
          id={square.id} 
          value={square.value} 
          onClickCallback={onClickCallback}/>
        );
    });
  });
  
  return allSquares;
}
// you can destructure this parameter to: {squares, onClickCallback}
// and then in generateSquareComponents you can just have (squares, onClickCallback)
const Board = (props) => {

  const squareList = generateSquareComponents(props.squares, props.onClickCallback);

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