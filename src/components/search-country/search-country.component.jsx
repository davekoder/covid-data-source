import React from "react";

import "./search-country.styles.scss";

const SearchCountry = ({
  placeholder,
  handleChange,
  handleClick,
  searchField,
}) => (
  <form onSubmit={handleClick} className='form'>
    <input
      className='input-box'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
      value={searchField}
    />
    <button className='search-button' onClick={handleClick}>
      Search
    </button>
  </form>
);
export default SearchCountry;
