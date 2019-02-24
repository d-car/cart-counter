import React from 'react';
import SearchFormLabel from './SearchFormLabel/SearchFormLabel';
import SearchButton from './SearchButton/SearchButton';

const SearchForm = props => {

  return (
    <form>
      <div>
        <SearchButton clicked={props.submit} />
      </div>
    </form>
  );
}
  

export default SearchForm;