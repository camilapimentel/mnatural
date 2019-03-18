import React from 'react';
import './styles/Search.css';

const Search = () => (
  <div className="search-box">
    <input id="place-holder" type="text" placeholder="O que você procura?" />
    <button id="button" type="submit" className="search-button">
      <img
        className="search-img"
        src="https://image.flaticon.com/icons/svg/49/49116.svg"
        alt=""
      />
    </button>
  </div>
);

export default Search;
