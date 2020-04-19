import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.
  // From Wave 1, the Board component passes two props: id and value 
  
  // In wave 2, we have to add new functionality that when the square
  // is clicked, it should set the square's value to the proper x or o 
  // we know that the click event should happen on the the <Square/> level, click on the button
  // Solution: Square should give its <button> a callback function to invoke when it is clicked
    // Note: when we put onClick = {onButtonClick}, we will get the error {onButtonClick}
    // is not defined because we haven't written it yet.
    // Questions: now when the button is clicked it invokes the {onButtonClick}
        //1. What do we want the onButtonClick function do? 
            // Answers: - when the button is clicked, we want to know which Square is clicked
            // - we want to mark that clicked square X or O
        //2. App component manages the state for the application, how the App know about this clicking?
            // Answers: onButtonClick takes the Square's props, and uses it to invoke the callback function (onClickCallback)
  const onButtonClick = () =>{ // invoking the onClickCallback. onClickCallback is from updateSquare in App component
    props.onClickCallback(props.id) // it is also passing id as an agurment 
  }
    return (
    <button className="square" onClick = {onButtonClick} >
      {props.value} 
    </button>
  )
}
// By looking at the propTypes, we also have onClickCallback that is props that gets from the parent Board Component
Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

export default Square;
