// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import './styles.css';

export const VanishString = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeout, setTimeout] = useState(false);
  const handleonClick = () => {
    setIsVisible(true);
  };
  useEffect(() => {
    let id;
    if (isVisible === true) {
      id = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
    return () => clearTimeout(id);
  }, [isVisible]);

  return (
    <div>
      <button onClick={handleonClick}>Pokaż napis</button>
      {isVisible && <div>napis:'Hello'</div>}
    </div>
  );
};
