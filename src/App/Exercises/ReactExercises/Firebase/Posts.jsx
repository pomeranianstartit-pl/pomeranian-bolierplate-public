import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase/firebaseConfig';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getAllPosts = async (callbac) => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const data = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      data.push({ ...doc.data(), id: doc.id });
    });
    console.log(data, 'data');
    setPosts(data);
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div>
      <h2>Firebase Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}, {post.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
