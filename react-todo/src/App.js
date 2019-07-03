import React from 'react';
import './App.css';
import TodoList from './todo-list/TodoList';
import PostsList from './posts-list/PostsList';

function App() {
  return (
    <div className="app">
      <TodoList />
      <PostsList />
    </div>
  );
}

export default App;
