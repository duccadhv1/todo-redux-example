import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, isComplete, onClick }) => (
  <li
    style={{
      textDecoration: isComplete ? "line-through" : "none"
    }}
    onClick={onClick}
  >
    {text}
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Todo;
