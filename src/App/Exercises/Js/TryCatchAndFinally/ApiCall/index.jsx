import { useEffect, useState } from 'react';

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
          throw new Error('Network response was not ok');
        }
        const postsData = await response.json();
        setPosts(postsData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        console.log('Treść błędu:', error.message); // Wyświetli "To jest testowy błąd."
        console.log('Typ błędu:', error.name); // Wyświetli "Error"
        console.log('Stos wywołań:', error.stack); // Wyświetli stos wywołań
      } finally {
        setIsLoading(false);
        console.log('FINALLY WE GOT THIS !!');
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="container--try-catch">
      {getIsLoading && 'Loading'}
      {getError && getError}
      <ul>
        {getPosts.map((post) => (
          <li key={post?.id}>{post?.title}</li>
        ))}
      </ul>
    </div>
  );
}
