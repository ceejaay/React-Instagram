import React from 'react';
import './searchBar.css'
const SearchBar = props => {
  return (
      <div className='searchbar'>
        <img
          alt="Instagram logo"
          src='./instagram_icon.png'
        />
        <p>Instagram</p>
        <form>
          <input></input>
          <button>Search</button>
        </form>
        <p>Compass</p>
        <p>heart</p>
        <p>Person</p>
      </div>
      );
};

export default SearchBar;
