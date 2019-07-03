import React, { Component } from 'react';
import './TodoList.css';
import TodoEntries from './todo-entries/TodoEntries';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      inputValue: ''
    };
  }

  render() {
    return (
      <div>
        <TodoEntries entries={this.state.entries} />
        <div className="inputs-wrapper">
          <input
            className="todo-input"
            value={this.state.inputValue}
            onChange={this.updateInputValue}
          />
          <button onClick={this.addNewTodo} className="add-button">
            Add
          </button>
        </div>
      </div>
    );
  }

  addNewTodo = () => {
    const newEntries = this.state.entries.slice(0);
    newEntries.push(this.state.inputValue);
    this.setState({
      entries: newEntries,
      inputValue: ''
    });
  };

  updateInputValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
}

export default TodoList;
