import {useState} from 'react';
import './styles.css';


export function BoxModel() {
  const[isTrue, setIsTrue] = useState(true)
  const clickHandler = () => {
    setIsTrue(!isTrue);
  }
  // conditional rendering
  return ( 
  <div className='box-model-base'>
    <p className='paragraph' onClick={clickHandler}>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

   {isTrue && <span className='inline-span'>Test inlinowy</span>}
    </p>
    <p className='paragraph content-box'>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved 
    <span className='inline-span'>Test inlinowy</span>
    </p>

    <p className='paragraph relative-box klasa-a'>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved 
    <span className='inline-span'>Test inlinowy</span>
    </p>

    <p className='klasa-b'>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved 
    <span className='inline-span'>Test inlinowy</span>
    </p>
  </div>
  );
}
