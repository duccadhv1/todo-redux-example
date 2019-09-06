import React from "react";
import PropTypes, { object } from "prop-types";
import Todo from "./Todo";
const TodoList = ({ todos, onClick }) => (
  <div>
    <h3>List todos</h3>
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onClick(todo.id)} />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(object).isRequired,
  onClick: PropTypes.func.isRequired
};

export default TodoList;
