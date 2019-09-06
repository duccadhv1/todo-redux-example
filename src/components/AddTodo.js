import React from "react";
import { connect } from "react-redux";
import { AddTodo as AddTodoAction } from "../actions";

const AddTodo = ({ addTodo }) => {
  let inputRef = React.createRef();
  let id = 0;
  const onSubmit = e => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) {
      return;
    }
    addTodo({
      id: ++id,
      text: inputRef.current.value.trim(),
      isComplete: false
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" id="name" ref={inputRef} />
      <input type="submit" value="Add Todo" />
    </form>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  addTodo: todo => dispatch(AddTodoAction(todo))
});
export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
