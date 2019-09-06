import React from "react";
import PropTypes from "prop-types";
import { AddTodo as AddTodoAction } from "../actions";
import { connect } from "react-redux";

const AddTodo = ({ addTodo }) => {
  let inputRef = React.createRef();
  let id = 0;
  const onSubmit = e => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) {
      return;
    }
    addTodo({
      text: inputRef.current.value.trim(),
      id: ++id,
      isComplete: false
    });
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" id="name" ref={inputRef} />
      <input type="submit" value="Add Todo" />
    </form>
  );
};
const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(AddTodoAction(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
