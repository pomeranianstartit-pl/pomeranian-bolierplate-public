import { useState } from 'react';
import './styles.css';

export const DogApi = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);

  const handleFetchDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setDogImageUrl(json.message);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Dog API - fetch a dog image</h1>
      <img src={dogImageUrl} alt="" />
      <button onClick={() => handleFetchDogImage()}>Show me a dog</button>
    </div>
  );
};
