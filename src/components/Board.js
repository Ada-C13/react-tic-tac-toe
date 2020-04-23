import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// Complete this for Wave 1
// We want to display all the squares but each Square will be responsible for displaying each square
// By looking at the App.js, App component is passing information to <Board/> component
// The information  <Board/> gets from App component is squares={squares} a props name is square with the value {squares}
// Note: squares is 2D array of object 
// So, with this given information, the Board component is responsible to renders all the squres 
// Our objective here: how we get a list of squares from the given 2D array of squares(objects)?
//Note: Square component will take 2 props from Board component (id and value)
const generateSquareComponents = (squares, onClickCallback) => {
// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
  const arrayOfSquareObj= squares.flat() // now we have an array of square objects but we want an array of Square component
  const arrayOfSquareComponents = arrayOfSquareObj.map((square) => { // square is an object with props of id and value
    return(
      <Square
        id = {square.id}
        value = {square.value}
        key = {square.id}
        onClickCallback = {onClickCallback} //Wave 2 passing the onClickCallback go Square component
      />
    )
  });
  return arrayOfSquareComponents; //generateSquareComponents returns an arrayOfSquareComponents
}

const Board = (props) => { //deconstructed given ({squares, onClickCallback}) to props  
const squareList = generateSquareComponents(props.squares, props.onClickCallback); // to get the value of squares, use props.squares
// console.log(squareList);
return <div className="grid" >
  {squareList}
</div>
}
// By looking at the propTypes, we also have onClickCallback that is props that gets from the parent App Component
Board.propTypes = {
squares: PropTypes.arrayOf(
  PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired
    })
  )
),
onClickCallback: PropTypes.func.isRequired,
};
    
export default Board;