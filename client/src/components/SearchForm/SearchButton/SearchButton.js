import React from 'react';

const SearchButton = (props) => (
    <button
      onClick={props.clicked}
      className="btn search">
      Search
    </button>
);

export default SearchButton;