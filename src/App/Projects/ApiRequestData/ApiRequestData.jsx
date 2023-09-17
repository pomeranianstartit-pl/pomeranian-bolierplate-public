import { useEffect, useState } from 'react';

// const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const ApiRequestDataApp = ({ API_URL, endOfUrl }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error('Something went wrong :(');
      const postsFromServer = await response.json();
      // console.log(postsFromServer);
      setPosts(postsFromServer);
      // console.log('posty', posts);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPosts();
  }, [endOfUrl]);

  return (
    <ul>
      {/* {posts.map((post) => (
        <li key={post.id}>{{ post }}</li>
      ))} */}
      {/* {posts[0]} */}
    </ul>
  );
};
