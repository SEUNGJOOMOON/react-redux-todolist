import React, {Component} from 'react'
import styled from 'styled-components';

const ToDo = styled.li`
  width:200px;
  height:25px;
  text-align:left;
  margin-left: -35px;
`;

const ToDoComplete = styled.li`
  width:200px;
  height:25px;
  text-align:left;
  margin-left: -35px;
  color: red;
`;

class Todo extends Component {
  constructor(props) {
    super(props);
    this._onDelete = this._onDelete.bind(this);
    this._onChangeState = this._onChangeState.bind(this);
  }


  _onDelete(e) {
    e.preventDefault();

    const { deleteTodo } = this.props;
    deleteTodo(e.target.id);
  }

  _onChangeState(e) {
    e.preventDefault();

    const { changeStateTodo } = this.props;
    changeStateTodo(e.target.getAttribute('state'), e.target.id);
  }


  render() {
    const todoState = this.props.todo.state;
      if (todoState !== 'complete') {
        return (
          <ToDo>
            {this.props.todo.text}
            <button id={this.props.todo.id} onClick={this._onDelete} >delete</button>
            <button id={this.props.todo.id} onClick={this._onChangeState} state='complete' >complete</button>
          </ToDo>
        );
      }else{
        return (
          <ToDoComplete>
            {this.props.todo.text}
            <button id={this.props.todo.id} onClick={this._onDelete} >delete</button>
            <button id={this.props.todo.id} onClick={this._onChangeState} state='uncomplete' >cancel</button>
          </ToDoComplete>
        );
      }
  }
}

export default Todo;