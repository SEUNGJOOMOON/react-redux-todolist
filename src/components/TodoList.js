import React, {Component} from 'react'

import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    const todoEls = todos.map((todo, index) => (
      <Todo key={index} {...todo} />
    ));

    return (
      <ul>{todoEls}</ul>
    );
  }
}

export default TodoList;