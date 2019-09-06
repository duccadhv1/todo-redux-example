import React from "react";
import PropTypes from "prop-types";
import TodoList from "../containers/TdoList";
import AddTodo from "../containers/AddTodo";

const App = () => (
  <div>
    My Todo App
    <AddTodo />
    <TodoList ahihi="ahehe" />
  </div>
);

export default App;
