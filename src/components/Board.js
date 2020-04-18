import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1

  // Uses map 2 times since it's a 2D array. With the first map it get's the entire row.
  // With the second map, it accesses each square object and modifies it into Square component.
  // It passes the whole square object as props when calling a Square component.
  const squareComponents = squares.map((row) => 
    row.map(square => <Square key={square.id} square={square} onClickCallback={onClickCallback}/>)
  );

  return squareComponents;
}

const Board = (props) => {
  const squareComponents = generateSquareComponents(props.squares, props.onClickCallback);
  console.log(squareComponents);
  return <div className="grid" >
    {squareComponents}
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
