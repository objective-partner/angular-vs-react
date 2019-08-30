import React, { useState, useEffect } from 'react';
import './PostsList.css';
import Post from './post/Post';
import axios from 'axios';

function PostsList(props) {
  const { title, url } = props;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData(url, setPosts);
  }, [url]);
  const postComps = posts.map((post, idx) => <Post key={idx} post={post} />);
  return (
    <div className="posts-wrapper">
      <h3>{title}</h3>
      {postComps}
    </div>
  );
}

function fetchData(url, setPosts) {
  axios
    .get(url)
    .then(postsData => {
      const extractedData = postsData.data.data.children;
      const extractedPosts = extractedData.map(postData => {
        return {
          title: postData.data.title,
          score: postData.data.score,
          url: postData.data.url
        };
      });
      setPosts(extractedPosts);
    })
    .catch(() => {
      console.log('some error');
    });
}

export default PostsList;
