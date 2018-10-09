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
      dummyData: [], 
      commentInput: ''
    }
  }

  componentDidMount() {
    this.setState({dummyData: dummyData })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer 
          changeHandler={this.changeHandler}
          commentInput={this.state.commentInput}
          dummyData={this.state.dummyData}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }

  addNewComment(event, index){
    // console.log(event)

   }

  changeHandler(event) {
    // this.setState({commentInput: event.target.commentInput})
      console.log(event.target.value);

  }
}

App.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
}
export default App;
