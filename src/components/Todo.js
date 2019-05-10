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

const ToDoKeep = styled.li`
  width:200px;
  height:25px;
  text-align:left;
  margin-left: -35px;
  color: blue;
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
      if (todoState === 'complete') {
        return (
          <ToDoComplete>
            {this.props.todo.text}
            <button id={this.props.todo.id} onClick={this._onDelete} >delete</button>
            <button id={this.props.todo.id} onClick={this._onChangeState} state='uncomplete' >cancel</button>
            <button id={this.props.todo.id} onClick={this._onChangeState} state='keep' >keep</button>
          </ToDoComplete>
        );
      }else if(todoState === 'keep'){
        return (
          <ToDoKeep>
            {this.props.todo.text}
            <button id={this.props.todo.id} onClick={this._onDelete} >delete</button>
            <button id={this.props.todo.id} onClick={this._onChangeState} state='complete' >complete</button>
            <button id={this.props.todo.id} onClick={this._onChangeState} state='uncomplete' >cancel</button>
          </ToDoKeep>
        );
      }else{
        return (
          <ToDo>
            {this.props.todo.text}
            <button id={this.props.todo.id} onClick={this._onDelete} >delete</button>
            <button id={this.props.todo.id} onClick={this._onChangeState} state='complete' >complete</button>
            <button id={this.props.todo.id} onClick={this._onChangeState} state='keep' >keep</button>
          </ToDo>
        );
      }
  }
}

export default Todo;