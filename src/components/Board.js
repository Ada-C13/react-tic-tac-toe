import React from "react";
import "./Board.css";
import Square from "./Square";
import PropTypes from "prop-types";

const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  return squares.map((row) => {
    return row.map((square) => {
      return (
        <Square
          key={square.id}
          id={square.id}
          value={square.value}
          onClickCallback={onClickCallback}
        />
      );
    });
  });
};

const Board = ({ squares, onClickCallback, isWinner }) => {
  // destructuring props/keys into variables to use in the component.

  const squareList = generateSquareComponents(squares, onClickCallback);
  return (
    <div className={`grid ${isWinner && "grid--winner"}`}>{squareList}</div>
  );
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
  isWinner: PropTypes.bool,
};

export default Board;
