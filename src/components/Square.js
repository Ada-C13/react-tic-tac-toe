import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {  
  return <button
    className="square" 
    key={props.id} 
    onClick={() => {
      if (props.value === '') props.onClickCallback(props.id); // will not overwrite if square already has 'X' or 'O'
    }} 
  >
    {props.value}
  </button>
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
