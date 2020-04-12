import React, { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    const {
      searchField,
      filterField,
      onSubmitHandler,
      onChangeHandler,
    } = this.props;
    return (
      <div className='search-box'>
        <form className='form' onSubmit={onSubmitHandler}>
          <input
            onChange={onChangeHandler}
            type='search'
            placeholder='Search for the news...'
            name='searchField'
            value={searchField}
          />
          <input type='submit' className='btn btn-primary my-1' />
        </form>
        <div>
          <input
            onChange={onChangeHandler}
            type='search'
            placeholder='Filter result...'
            name='filterField'
            value={filterField}
          />
        </div>
      </div>
    );
  }
}

export default SearchBox;
