import React, {Component} from 'react'
import styled from 'styled-components';

import Todo from './Todo';

const ToDoList = styled.ul`
  list-style: none;
`;


class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { todos } = this.props;
    let todosItem = [];

    for(let i = 0;i<todos.length;i++){
      todos[i].id = i;
      todosItem.push(<Todo key={i} todo={todos[i]} deleteTodo={this.props.deleteTodo} changeStateTodo={this.props.changeStateTodo} />);
    }

    return (
      <ToDoList>{todosItem}</ToDoList>
    );
  }
}

export default TodoList;