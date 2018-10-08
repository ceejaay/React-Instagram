import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dummyData from './dummy-data.js';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

App.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
}
export default App;
