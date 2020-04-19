//collab with Charlotte Adams
import React from "react";
import PropTypes from "prop-types";

import "./Square.css";

const Square = (props) => {
  // Wave e enable this Component to alert a parent
  // component when it's clicked.
  // const onSquareClick = () => {
  //   props.onClickCallback;
  // };

  return (
    <button
      className="square"
      // this button is listening for the click event and we passed it props
      // so id can be accessed via the onClickCallback in App.js
      // a square needs to know its id
      onClick={() => props.onClickCallback(props.id)}
    >
      {props.value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
