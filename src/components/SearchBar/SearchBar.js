import React from 'react';
import './searchBar.css'
const SearchBar = props => {
  return (
      <div className='searchbar'>
        <div className='logoandtext'>
        <img
            alt="Instagram logo"
            src='./instagram_icon.png'
          />
          <p className='instagram-text'>Instagram</p>
        </div>
        <form>
          <input placeholder='              search'>
          </input>
        </form>
        <div className='icons'>
          <p>◎</p>
          <p className='heartIcon'>♡</p>
          <p>☺︎</p>
        </div>
      </div>
      );
};

export default SearchBar;
