import { useEffect, useState } from 'react';
import './styles.css';
import { getElementError } from '@testing-library/react';

export function ApiCallExercise() {
  const [getposts, setPosts] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [getError, setError] = useState(null);

  const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${BASE_API_URL}/posts`);
        if (!response.ok) {
          throw new Error('Network reponse was not OK');
        }
        const postsData = await response.json();
        setPosts(postsData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        console.log('Treść błedu:', error.message);
        console.log('Typ błedu:', error.name);
        console.log('Stos wywołań:', error.stack);
      } finally {
        setIsLoading(false);
        console.log('FINALLY WE GOT THIS!!');
      }
    }
    fetchPosts();
  }, []);
  return (
    <div className="container--try-catch">
      {getIsLoading && 'Loading'}
      {getError && getError}
      <ul>
        {getposts.map((post) => (
          <li key={post?.id}>{post?.title}</li>
        ))}
      </ul>
    </div>
  );
}
