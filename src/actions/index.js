export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_STATE_TODO = 'CHANGE_STATE_TODO';

export function addTodo(text) {
  return { type: ADD_TODO, text }
};

export function deleteTodo(index) {
  return { type: DELETE_TODO, id: index }
};

export function changeSateTodo(state, index) {
  return { type: CHANGE_STATE_TODO, state: state, id: index }
};