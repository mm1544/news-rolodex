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

// export const SearchBox = ({ searchField, onSubmitHandler, onChangeHandler }) => (
//   <div className='search'>
//     <form
//       className='form'
//       onSubmit={(e) => {
//         e.preventDefault();
//         onSubmitHandler(searchField);
//       }}
//     >
//       <input
//         onChange={(e) => {
//           this.setState({ searchField: e.target.value });
//           console.log(searchField);
//         }}
//         type='search'
//         placeholder='Search for the news...'
//       />
//       <input type='submit' className='btn btn-primary my-1' />
//     </form>
//     <div>
//       <input
//         onChange={(e) => this.setState({ filterField: e.target.value })}
//         type='search'
//         placeholder='Filter result...'
//       />
//     </div>
//   </div>
