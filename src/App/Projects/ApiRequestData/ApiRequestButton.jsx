import React from 'react';

export const ApiRequestButton = ({ handleClick }) => {
  return (
    <>
      {/* <button value={'posts'} onClick={handleClick} type="submit">
        posts
      </button>
      <button value={'comments'} onClick={handleClick} type="submit">
        comments
      </button>
      <button value={'users'} onClick={handleClick} type="submit">
        users
      </button> */}

      {/* ARRAY */}
      <button value={1} onClick={handleClick} type="submit">
        posts
      </button>
      <button value={2} onClick={handleClick} type="submit">
        comments
      </button>
      <button value={3} onClick={handleClick} type="submit">
        users
      </button>
    </>
  );
};
