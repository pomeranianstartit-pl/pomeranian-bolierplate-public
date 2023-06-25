import React from 'react';
import space from './space.jpg';

const Floats = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{ width: '200px', float: 'left' }}
        src={space}
        alt="space (d) view"
      />
      <img
        style={{
          width: '40px',
          float: 'left',
          position: 'absolute',
          left: '0',
          top: '0',
          zIndex: '1',
        }}
        src={space}
      />
      <div
        style={{
          width: '200px',
          height: '500px',
          background: 'grey',
          float: 'right',
        }}
      ></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vitae
        deleniti, quaerat velit ullam ut exercitationem voluptas itaque error
        in, unde est consectetur soluta facere at laboriosam tempore nemo
        magnam.
      </p>
    </div>
  );
};

export default Floats;
