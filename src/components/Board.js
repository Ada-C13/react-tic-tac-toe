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

const Board = ({ squares, onClickCallback }) => {
  // destructuring props/keys into variables to use in the component.

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

// const person = {
//   name: "Sara",
//   address: {
//     city: "Seattle, WA",
//     zip: "98133"
//   },
//   hairColor: "black"
// }

// person.name
// person.address.city

// const first_name = person.name;
// const hairColor = person.hairColor;
// const address = person.address;

// const { name, hairColor, address } = person;

// const { city, zip } = person.address;
