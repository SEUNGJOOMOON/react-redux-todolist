import { ADD_TODO, DELETE_TODO } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      let todo = {
        id: action.id,
        text: action.text
      };

      return state.concat(todo);
    case DELETE_TODO:
      return state.filter(({ id }) => id != action.id);
    default:
      return state;
  }
}