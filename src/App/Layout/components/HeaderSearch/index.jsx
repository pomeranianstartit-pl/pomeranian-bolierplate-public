import React from 'react';
import './styles.css';
import { SearchIcon } from '../../../Components/Icons/SearchIcon';

const HeaderSearch = () => {
  return (
    <div className="search-container">
      <SearchIcon className="search-icon" />
      <input className="search-input" type="text" placeholder="Search" />
    </div>
  );
};

export default HeaderSearch;
