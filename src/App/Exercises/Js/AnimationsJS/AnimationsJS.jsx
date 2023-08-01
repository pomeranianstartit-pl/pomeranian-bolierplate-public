import { useEffect, useState } from 'react';
import './styles.css';

export const AnimationsJS = () => {
  const [text, setText] = useState('I love React :) ');
  const [isAnimated, setIsAnimated] = useState(true);
  const [opacity, setOpacity] = useState(1);

  function toggleAnimation() {
    setIsAnimated((prevState) => !prevState);
  }

  useEffect(() => {
    if (isAnimated) {
      const interval = setInterval(() => {
        const lastLetter = text.charAt(text.length - 1);
        const newText = lastLetter + text.substring(0, text.length - 1);

        setText(newText);
      }, [200]);

      return () => {
        clearInterval(interval);
      };
    }
  }, [text, isAnimated]);

  useEffect(() => {
    if (opacity > 0) {
      const interval = setInterval(() => {
        setOpacity(opacity - 0.005);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [opacity]);

  return (
    <div>
      <p>{text}</p>
      <button onClick={toggleAnimation}>
        {isAnimated ? 'Pause' : 'Start'}
      </button>
      <div className="animated-box" style={{ opacity: opacity }}></div>
    </div>
  );
};
 
 
 // const initialText = ' I love React :)';
  //const [text, setText] = useState(initialText);

 // useEffect(() => {
   // const animationInterval = setInterval(() => {
    //  setText((prevText) => {
        // Move the last character to the beginning of the string
     //   return prevText.charAt(prevText.length - 1) + prevText.slice(0, -1);
     // });
    //}, 200); // Adjust the interval time (in milliseconds) for the desired animation speed

    //return () => clearInterval(animationInterval);
//  }, [text]);

 // return (
   // <div>
   //   <p>{text}</p>
   // </div>
 // );
//};




