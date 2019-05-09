import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom'

import rootReducer from './reducers';
import { addTodo } from "./actions";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const store = createStore(rootReducer);

const render = () => ReactDOM.render(
  <div id='app'>
    <AddTodo addTodo={(text) => { store.dispatch(addTodo(text)) }}/>
    <TodoList todos={store.getState()}/>
  </div>
  ,
  document.querySelector('#root')
);

render();
store.subscribe(render);