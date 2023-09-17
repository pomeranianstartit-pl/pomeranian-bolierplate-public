import { Link } from 'react-router-dom';
import { ApiRequestDataApp } from './ApiRequestData';
import { ApiRequestButton } from './ApiRequestButton';
import { useEffect, useState } from 'react';

const TYPE_OF_DATA_OBJECT = {
  posts: {
    url: '/posts',
  },

  comments: {
    url: '/comments',
  },

  users: {
    url: '/users',
  },
};

const TYPE_OF_DATA = [
  {
    id: 1,
    url: '/posts',
  },
  {
    id: 2,
    url: '/comments',
  },
  {
    id: 3,
    url: '/users',
  },
];

export const ApiRequestData = () => {
  const [endOfUrl, setEndOfUrl] = useState('/posts');

  const handleClick = (e) => {
    const id = e.target.value;
    console.log('id przed forEachem', id);
    TYPE_OF_DATA.forEach((el) => {
      console.log('el.id', el.id, 'w iteracji');
      if (el.id == id) {
        console.log('jest równy');
        setEndOfUrl(el.url);
      } else {
        console.log('coś nie tak');
      }
    });
  };

  const handleClickOfObject = (e) => {
    e.preventDefault();
    const { value } = e.target;
    console.log('Value before destruct', value);

    console.log('[value] of url', TYPE_OF_DATA_OBJECT[value].url);

    setEndOfUrl(TYPE_OF_DATA_OBJECT[value].url);

    // TYPE_OF_DATA.forEach((el) => {
    //   console.log('el.id', el.id);
    //   console.log('el.url', el.url);
    //   console.log('id', id);
    //   if (el.id === id) {
    //     setEndOfUrl(el.url);
    //   } else {
    //     console.log('coś nie tak');
    //   }
    // });
    // console.log(endOfUrl);
  };

  const API_URL = `https://jsonplaceholder.typicode.com${endOfUrl}`;

  useEffect(() => {
    console.log(endOfUrl);
  }, [endOfUrl]);

  return (
    <div>
      <div className="page-path">
        <Link to="/dashboard">Strona główna</Link>
        <p>&nbsp;&gt;&nbsp;</p>
        <Link to="/projects">Projekty</Link>
        <p>&nbsp;&gt;&nbsp;Api Request</p>
      </div>
      <h1>Łączenie z serwerem</h1>
      <ApiRequestButton handleClick={handleClick} />
      <ApiRequestDataApp API_URL={API_URL} endOfUrl={endOfUrl} />
    </div>
  );
};
