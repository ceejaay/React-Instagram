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
    this.hydrateWithLocalStorage();
  }


  hydrateWithLocalStorage() {
    for(let key in this.state) {
      if(localStorage.hasOwnProperty(key)){

        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({[key]: value})
        } catch (e) {
          this.setState({[key]: value})
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar  
          state={this.state}
          changeHandler={this.changeHandler} findPost={this.findPost}/>
        <PostContainer 
          dummyData={this.state.dummyData}
          addNewComment={this.addNewComment}
          changeHandler={this.changeHandler}
          commentInput={this.state.commentInput}
        />
      </div>
    );
  }

  findPost = (event, searchText) => {
    event.preventDefault();
    console.log(searchText);
    

  }

  addNewComment = (event, targetUserName, comment) => {
      event.preventDefault();
      console.log(event)
       const newData =  this.state.dummyData.map((item)=>{
          if(targetUserName === item.username) {
            return {...item, comments: [...item.comments, {text: comment, username: 'Chad'}]}
          } else {
            return item;
          }
        })
      this.setState({dummyData: newData})
      localStorage.setItem('dummyData', JSON.stringify(this.state.dummyData))
  }

  changeHandler = (event)  => {
     this.setState({commentInput: event.target.value})
     console.log(event.target.value);
  }
}

App.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
}
export default App;
