import React, {Component} from 'react'
import styled from 'styled-components';

const AddBtn = styled.button`
    float:right;
  `;

  const InputTodo = styled.input`
    width: 450px;
    float:left;
  `;

  const InputTodoDiv = styled.div`
    width: 500px;
    height: 25px;
    float:left;
  `;




class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.inputTodo = document.querySelector('#inputTodo');
  }

  onClick(e) {

    e.preventDefault();
    if(!this.inputTodo.value){
      alert('please input value');
      return;
    }
    const { addTodo } = this.props;
    addTodo(this.inputTodo.value);
    this.inputTodo.value = ''; 
  }

  

  render() {
    return (
      <form id='addTodo'>
        <InputTodoDiv>
          <InputTodo id='inputTodo' placeholder='Enter todo'/>
          <AddBtn type='submit' onClick={this.onClick}>ADD</AddBtn>
        </InputTodoDiv>
      </form>
    );
  }
}

export default AddTodo;