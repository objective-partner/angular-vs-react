import React from 'react';
import './Post.css';

function Post(props) {
  const { title, score } = props.post;
  return (
    <div>
      <span>{title}</span>
      <span>{score}</span>
    </div>
  );
}

export default Post;
