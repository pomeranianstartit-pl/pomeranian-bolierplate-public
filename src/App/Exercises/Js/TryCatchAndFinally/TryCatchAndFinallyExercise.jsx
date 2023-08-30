import { useEffect, useState } from 'react';
import './style.css';
export function ApiCallExercise() {
  const [getPosts, setPosts] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [getError, setError] = useState(null);

  const BASE_API_URL = 'https://jsonplaceholder.typicode.com';
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${BASE_API_URL}/posts`);
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const postData = await response.json();
        setPosts(postData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        console.log('finaly we got this!!');
      }
    }
    fetchPosts();
  }, []);
  return <div className="container--try-catch">
    {getIsLoading && 'Loading...'}
    {getError && getError}
        <ul>
            {
                getPosts.map(post => (<li key={post?.id}>`${post?.title}`</li>))
            }
            </ul>
  </div>;
}
