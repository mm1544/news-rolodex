import React, { Component } from 'react';
import './App.css';
// import NewsList from './components/card-list/NewsList';
import NewsList from './components/card-list/card-list.component';

class App extends Component {
  render() {
    return (
      <div>
        <NewsList />
      </div>
    );
  }
}

export default App;
