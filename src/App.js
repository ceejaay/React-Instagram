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
          dummyData={this.state.dummyData}
          addNewComment={this.addNewComment}
          changeHandler={this.changeHandler}
          commentInput={this.state.commentInput}
        />
      </div>
    );
  }


  addNewComment = (event, targetUserName, comment) => {
      event.preventDefault();
       const newData =  this.state.dummyData.map((item)=>{
          if(targetUserName === item.username) {
            return {...item, comments: [...item.comments, {text: comment, username: 'Chad'}]}
          } else {
            return item;
          }
        })
      this.setState({dummyData: newData})
  }

  changeHandler = (event)  => {
     this.setState({commentInput: event.target.value})
     // console.log(event.target.value);
  }
}

App.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
}
export default App;
