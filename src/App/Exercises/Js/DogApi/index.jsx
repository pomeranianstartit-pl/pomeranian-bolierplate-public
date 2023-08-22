import { useState } from 'react';
import './styles.css';

const DOG_IMAGE_PLACEHOLDER =
  'data:image/png;base64,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';
const DOG_API_IMAGE_URL = 'https://dog.ceo/api/breeds/image/random';

export const DogApi = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);

  function handleFetchDogImage() {
    const getDogImage = async () => {
      try {
        const result = await fetch(DOG_API_IMAGE_URL);
        const { status, message } = await result.json();

        if (status !== 'success') {
          throw new Error('Cannot fetch dog image :c');
        }

        setDogImageUrl(message);
      } catch (error) {
        console.log(error);
        setDogImageUrl(null);
      }
    };

    getDogImage();
  }

  return (
    <div className="dog-api-wrapper">
      <h1>Dog API - fetch a dog image</h1>
      <div className="dog-api-img-wrapper">
        <img
          className="dog-api-img"
          src={dogImageUrl ? dogImageUrl : DOG_IMAGE_PLACEHOLDER}
          alt="Random dog"
        />
      </div>
      <button className="dog-api-btn" onClick={() => handleFetchDogImage()}>
        {dogImageUrl ? 'Shuffle' : 'Show me a real dog'}
      </button>
    </div>
  );
};
