import { useState } from 'react';
import './styles.css';

export const DogAPI = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);

  const handleFetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await response.json();
      setDogImageUrl(json.message);
    } catch (error) {
      console.error(error);
    } finally {
      // whatever I want tu put here
    }
  };

  return (
    <div className="wrapper">
      <h1 className="header">Dog API - fetch a dog image</h1>
      <button className="btn" onClick={handleFetchDogImage}>
        Show me a dog
      </button>
      <img className="img" src={dogImageUrl} alt="" />
    </div>
  );
};
