import React from 'react';

const MemoButton = (props) => {
  return (
    <button>
      {props.min}:{props.sec}
    </button>
  );
};

export default MemoButton;
