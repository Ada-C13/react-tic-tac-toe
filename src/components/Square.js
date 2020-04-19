import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  // need something to handle the click
  // passed on from button
  const handleClick = () =>
  {
    const updatedSquare = {
      id: props.id,
      value: props.value,
      key: props.id,
      onClickCallback: props.onClickCallback
    }

    props.onClickCallback(updatedSquare);
  };
  
  return <button
    className="square"
    onClick={handleClick}
  >
    {props.value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
