import { useState } from 'react';
import './styles.css';

export function BoxModel() {
const [isTrue, setIsTrue] = useState(true)

const clickHandler = () => {
  setIsTrue(!isTrue);
}

  return (
    <div className='box-model-base'>
      <p className='paragraph' onClick={clickHandler}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
      {/* conditional rendering */}
      {isTrue && <span className='inline-span'>Test inlinowy</span>}
      </p>

      <p className='paragraph content-box'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{' '} 
      <span className='inline-span'>Test inlinowy</span>
      </p>

      <p className='paragraph relative-box'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{' '} 
      <span className='inline-span'>Test inlinowy</span>
      </p>
      
    </div>
  )
}
