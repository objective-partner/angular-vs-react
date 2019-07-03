import React, { Component } from 'react';
import './TodoList.css';
import TodoEntries from './todo-entries/TodoEntries';

class TodoList extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <TodoEntries />
        <input />
        <button className="add-button">Add</button>
      </div>
    );
  }
}

export default TodoList;
