import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {

  const flattenSquares = squares.flat();
  const squareComponents = flattenSquares.map((square) => {

    return (
        <Square
          id={square.id}
          value={square.value} 
          key={square.id}
          onClickCallBack={square.onClickCallBack}

        />
          
    
    );
  });
  return squareComponents;
};



const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid">
    {squareList}
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
