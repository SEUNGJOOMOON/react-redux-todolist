import React, {Component} from 'react'
import styled from 'styled-components';

const ToDo = styled.li`
  width:500px;
  height:25px;
  text-align:left;
  margin-left: -35px;
`;

const ToDoComplete = styled.li`
  width:500px;
  height:25px;
  text-align:left;
  margin-left: -35px;
  color: red;
`;

const ToDoKeep = styled.li`
  width:500px;
  height:25px;
  text-align:left;
  margin-left: -35px;
  color: blue;
`;

const TodoValue = styled.div`
  width: 300px;
  height:100%;
  float:left;
`;

const TodoButton = styled.div`
  width: 180px;
  height: 100%;
  text-align:right;
  float:right;
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
            <TodoValue>{this.props.todo.text}</TodoValue>
            <TodoButton>
              <button id={this.props.todo.id} onClick={this._onDelete} >delete</button>
              <button id={this.props.todo.id} onClick={this._onChangeState} state='uncomplete' >cancel</button>
              <button id={this.props.todo.id} onClick={this._onChangeState} state='keep' >keep</button>
            </TodoButton>
          </ToDoComplete>
        );
      }else if(todoState === 'keep'){
        return (
          <ToDoKeep>
            <TodoValue>{this.props.todo.text}</TodoValue>
            <TodoButton>
              <button id={this.props.todo.id} onClick={this._onDelete} >delete</button>
              <button id={this.props.todo.id} onClick={this._onChangeState} state='complete' >complete</button>
              <button id={this.props.todo.id} onClick={this._onChangeState} state='uncomplete' >cancel</button>
            </TodoButton>
          </ToDoKeep>
        );
      }else{
        return (
          <ToDo>
            <TodoValue>{this.props.todo.text}</TodoValue>
            <TodoButton>
              <button id={this.props.todo.id} onClick={this._onDelete} >delete</button>
              <button id={this.props.todo.id} onClick={this._onChangeState} state='complete' >complete</button>
              <button id={this.props.todo.id} onClick={this._onChangeState} state='keep' >keep</button>
            </TodoButton>
          </ToDo>
        );
      }
  }
}

export default Todo;