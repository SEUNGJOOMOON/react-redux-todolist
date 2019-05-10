import { ADD_TODO, DELETE_TODO, CHANGE_STATE_TODO } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      let todo = {
        id: action.id,
        text: action.text,
        state: 'uncomplete'
      };

      return state.concat(todo);
    case DELETE_TODO:
      return state.filter(({ id }) => Number(id) !== Number(action.id));
    case CHANGE_STATE_TODO:
      let todo2 = {
        id: action.id,
        text: state[action.id].text,
        state: action.state
      };
      state.splice(action.id, 1, todo2);
      return state;
    default:
      return state;
  }
}