export const ADD_TODO = "ADD_TODO";

export const AddTodo = todo => {
  return {
    type: "ADD_TODO",
    todo
  };
};

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});
