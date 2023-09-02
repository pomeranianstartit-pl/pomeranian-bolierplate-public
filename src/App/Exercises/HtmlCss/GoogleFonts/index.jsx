import './styles.css';
import { useState } from 'react';

function onClickHandler(event) {}

export const GoogleFonts = () => {
  const state = useState('font-roboto');
  console.log(state);
  const [dynamicClass, setDynamicClass] = useState('f-roboto');

  return (
    <>
      <p className={dynamicClass}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
        lorem mollis, tempor nisl in, ultricies mauris. Nunc malesuada varius
        rhoncus. Vestibulum elementum tristique suscipit. Morbi porttitor vel
        ipsum eu venenatis. Ut ligula erat, mattis ut dapibus eget, malesuada ut
        odio. Fusce venenatis interdum tellus, non consectetur erat ullamcorper
        et. Donec dictum cursus elementum. Morbi dolor eros, rutrum sed arcu sit
        amet, cursus tempus sem. Duis velit nibh, tempus vel ex eu, facilisis
        viverra nisi. Suspendisse et orci tempus ligula iaculis feugiat. Integer
        at nisi erat. Suspendisse potenti. Pellentesque laoreet sapien erat, nec
        malesuada nulla auctor euismod. Nulla porta mauris ut nunc ornare, id
        tristique purus accumsan. Donec at ante ipsum.
      </p>

      <button
        onClick={() => {
          setDynamicClass('x');
        }}
      >
        Click me
      </button>
    </>
  );
};
