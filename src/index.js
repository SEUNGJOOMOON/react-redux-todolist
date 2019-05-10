import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components';

import rootReducer from './reducers';
import { addTodo, deleteTodo, changeSateTodo } from "./actions";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const Wrapper = styled.div`
  width:500px;
  min-height: 700px;
  margin:0 auto;
`;


const store = createStore(rootReducer);

const render = () => ReactDOM.render(
  <Wrapper>
    <AddTodo addTodo={(text) => { store.dispatch(addTodo(text)) }}/>
    <TodoList todos={store.getState()} deleteTodo={(id) => { store.dispatch(deleteTodo(id))}} changeStateTodo={(state, index) => {store.dispatch(changeSateTodo(state, index))}}/>
  </Wrapper>
  ,
  document.querySelector('#root')
);

render();
store.subscribe(render);