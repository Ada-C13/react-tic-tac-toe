import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.
  
  // const onButtonClick = () => {//How we switch from nothing to player selection
  //   // props.onClickCallback(props.id);
  //   props.onClickCallback(props.id)
  // }
    //Send this new square back to App.js

  return (
    <button 
    className="square" 
    key={props.id} 
    onClick={() => {props.onClickCallback(props.id)}} >
      {props.value}
    </button>)
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
