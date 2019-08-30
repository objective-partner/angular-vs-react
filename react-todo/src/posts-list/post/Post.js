import React from 'react';
import './Post.css';

function Post(props) {
  const { title, score, url } = props.post;
  return (
    <div className="post-wrapper">
      <span className="post-title">{title}</span>
      <span className="post-score">{'Score: ' + score}</span>
      <a className="post-link" href={url}>
        Link
      </a>
    </div>
  );
}

export default Post;
