import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // Wave 1: enable Square to alert a parent component when clicked.

  const onClickCallback = () => {
    
  }

  return (
    <button className="square">
      {props.value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
