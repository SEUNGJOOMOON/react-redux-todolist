import React, {Component} from 'react'
import styled from 'styled-components';

const AddBtn = styled.button`
    
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
        <input id='inputTodo' placeholder='Enter todo'/>
        <AddBtn type='submit' onClick={this.onClick}>ADD</AddBtn>
      </form>
    );
  }
}

export default AddTodo;