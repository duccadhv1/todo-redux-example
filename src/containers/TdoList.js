import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../actions";

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
