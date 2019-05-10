import React, {Component} from 'react'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }


  onClick(e) {
    e.preventDefault();

    const { deleteTodo } = this.props;
    deleteTodo(e.target.id);
  }


  render() {
    return (
      <li>
        {this.props.todo.text}<button id={this.props.todo.id} onClick={this.onClick} >delete</button>
      </li>
    );
  }
}

export default Todo;