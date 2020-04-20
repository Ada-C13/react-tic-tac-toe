import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  const onSquareClick = () => {
    // call the function passed from `App` if the square value is ''
    // do nothing if there is already some value or the winner is found
    if (props.value === '' && !props.winner) {
      props.onClickCallback(props.id);
    };
  };


  return <button
    className="square"
    onClick={onSquareClick} 
  >
    {props.value} {/* Text of the button */}
  </button>
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
