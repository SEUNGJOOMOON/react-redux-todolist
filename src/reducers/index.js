import { ADD_TODO, REMOVE_TODO } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
        console.log(...state);
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        },
      ];
    case REMOVE_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        },
      ];
    default:
      return state;
  }
}