import React, { useEffect, useState } from 'react';
import './style.css';

export function JsonServerPosts() {
  // Remember to install jsonServer from NPM https://www.npmjs.com/package/json-server
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      return fetch('http://localhost:3001/posts')
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((e) => console.error(e));
    };
    getPosts();

    return () => getPosts();
  }, []);

  return posts.map((post) => (
    <div key={post.id}>
      <b>
        {post.author} created: {post.dateOfCreation}
      </b>
      <h5>{post.title}</h5>
      <p>{post.content}</p>
    </div>
  ));
}

