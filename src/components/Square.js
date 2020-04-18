import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = ({id, value, onClickCallback}) => {
  // For Wave 1 enable this 
  // console.log(props)
  //  Component to alert a parent 
  //  component when it's clicked on.

  const onSquareClick = () => {
    // const squareClickedId = { id, value }
    onClickCallback({ id, value });
  }

  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
