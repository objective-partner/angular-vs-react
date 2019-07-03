import React, { useState, useEffect } from 'react';
import './PostsList.css';
import Post from './post/Post';
import axios from 'axios';

function PostsList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData(setPosts);
  }, []);
  const postComps = posts.map((post, idx) => <Post key={idx} post={post} />);
  return (
    <div>
      <p>Top 10 Angular's Reddit Posts</p>
      {postComps}
    </div>
  );
}

function fetchData(setPosts) {
  axios
    .get('https://www.reddit.com/r/Angular2/top.json?sort=new&limit=10')
    .then(postsData => {
      const extractedData = postsData.data.data.children;
      const extractedPosts = extractedData.map(postData => {
        return { title: postData.data.title, score: postData.data.score };
      });
      setPosts(extractedPosts);
    })
    .catch(() => {
      console.log('some error');
    });
}

export default PostsList;
