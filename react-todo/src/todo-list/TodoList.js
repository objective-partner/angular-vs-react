import React, { Component } from 'react';
import './TodoList.css';
import TodoEntries from './todo-entries/TodoEntries';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <TodoEntries entries={this.state.entries} />
        <input />
        <button className="add-button">Add</button>
      </div>
    );
  }
}

export default TodoList;
