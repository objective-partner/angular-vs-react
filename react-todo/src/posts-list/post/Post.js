import React from 'react';
import './Post.css';

function Post(props) {
  const { title, score } = props.post;
  return (
    <div className="post-wrapper">
      <span className="post-title">{title}</span>
      <span className="post-score">{'Score: ' + score}</span>
    </div>
  );
}

export default Post;
