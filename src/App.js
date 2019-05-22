import React, { Component } from 'react'
import './components/TodoInput';
import './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <TodoInput/>
        <TodoList/>
      </div>
    )
  }
}
