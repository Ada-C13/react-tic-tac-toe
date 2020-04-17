import React from "react";
import "./Board.css";
import Square from "./Square";
import PropTypes from "prop-types";

const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  return squares.map((row) => {
    return row.map((square) => {
      return <Square id={square.id} value={square.value} />;
    });
  });
};

const Board = ({ squares, onClickCallback }) => {
  console.log("SQUARES: ", squares);
  const squareList = generateSquareComponents(squares, onClickCallback);
  return <div className="grid">{squareList}</div>;
};

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
