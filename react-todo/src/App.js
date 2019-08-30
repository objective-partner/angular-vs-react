import React from 'react';
import './App.css';
import PostsList from './posts-list/PostsList';

function App() {
  return (
    <div className="app">
      <h1>UIF Trendmonitor</h1>
      <div className="posts-lists-wrapper">
        <PostsList
          title="Top Angular's Reddit Posts"
          url="https://www.reddit.com/r/Angular2/top.json?sort=new&limit=20"
        />
        <PostsList
          title="Top React's Reddit Posts"
          url="https://www.reddit.com/r/reactjs/top.json?sort=new&limit=20"
        />
      </div>
    </div>
  );
}

export default App;
