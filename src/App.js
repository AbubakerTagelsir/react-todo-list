import React, { Component } from 'react'
import './components/TodoInput';
import './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import uuid from 'uuid';
export default class App extends Component {

  state = {
    items: [
      {id:1,title: "Task A"},
      {id:1,title: "Task A"},
      {id:1,title: "Task A"},
      {id:1,title: "Task A"},
    ],
    id:uuid(),
    item: '',
    editItem: false,
  };

  handleChange = (e) => {
    console.log("Change Appears!");
  }
  handleSubmit = (e) => {
    console.log("Change Appears!");
  }

  clearList = () => {console.log("Clear List!");
  }
  handleEdit = id => {console.log("Edit");
  }
  handleDelete = id => {console.log("Deleted!");
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    )
  }
}
