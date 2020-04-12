import React, { Component } from 'react';
import './App.css';
// import NewsList from './components/card-list/NewsList';
import NewsList from './components/card-list/card-list.component';
import Navbar from './components/navbar/navbar.component';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NewsList />
      </div>
    );
  }
}

export default App;
