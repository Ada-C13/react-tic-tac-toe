import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  const onSquareClick =() => {
    const changedSquare ={
      id: props.id,
      value:props.value
    }


    props.onClickCallback(changedSquare);
    
  }




  return <button
    className="square Square"
    onClick ={onSquareClick}
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
