import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.
  const onSquareClick = () => {
    if (props.value === "" && props.winner === ""){
      let value = ""
      value = props.turn % 2 === 1 ? "X" : "O";
  
      const clickedSquare = {
        id: props.id,
        value: value
      };
  
      props.onClickCallback(clickedSquare);
    }
  }

  return (
   <button className="square" onClick={onSquareClick}>
    {props.value}
  </button>
  );
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  turn: PropTypes.number.isRequired,
  winner: PropTypes.string.isRequired
};

export default Square;
