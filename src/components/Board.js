import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1

  // const newArray = squares.map((subarray) {
  //   for(let j=0; j < subarray.length; j++) {
  //     console.log(subarray[j]);
  //     return(
  //       <Square 
  //         id={subarray[j].id} 
  //         value={subarray[j].value}
  //         key={subarray[j].id}
  //         onClickCallback={onClickCallback}
  //       />

  //     );
  //   }
  // })



  const arraySquareComponents = []
  for(let row = 0; row < squares.length; row++) {
    for(let col = 0; col < squares[row].length; col++) {
      arraySquareComponents.push(
        <Square 
          id={squares[row][col].id} 
          value={squares[row][col].value}
          key={squares[row][col].id}
          onClickCallback={onClickCallback}
        />
      );
    }
  };

  return arraySquareComponents;
};

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
};

export default Board;
