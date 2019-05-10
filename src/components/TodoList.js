import React, {Component} from 'react'

import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    let todosItem = [];

    for(let i = 0;i<todos.length;i++){
      todos[i].id = i;
      todosItem.push(<Todo key={i} todo={todos[i]} deleteTodo={this.props.deleteTodo} />);
    }

    return (
      <ul>{todosItem}</ul>
    );
  }
}

export default TodoList;