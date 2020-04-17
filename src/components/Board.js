import React from "react";
import "./Board.css";
import Square from "./Square";
import PropTypes from "prop-types";

const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1

  // Find a way to make a 2D array 1D
  const flattenSquares = squares.flat();
  const squareComponents = flattenSquares.map((square) => {
    return (
      <Square
        id={square.id}
        value={square.value}
        key={square.id}
        onClickCallback={square.onClickCallback}
      />
    );
  });
  return squareComponents;
};
// const Board = (props) => {
const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
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
