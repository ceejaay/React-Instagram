import React from 'react';
import './searchBar.css'
class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
    }
  }

  changeHandler = (event) => {
    this.setState({searchText: event.target.value})
      // console.log(event.target.value)
  }

  findPost = (value) => {
    // this.props.findPost(event, event.target.value)
    console.log(value)

  }

  render() {
    return(
      <div className='searchbar'>
        <div className='logoandtext'>
        <img
            alt="Instagram logo"
            src='./instagram_icon.png'
          />
          <p className='instagram-text'>Instagram</p>
        </div>
        <form onChange={this.changeHandler} onSubmit={() => this.findPost(this.searchText)}>

          <input placeholder='              search'>
          </input>
        </form>
        <div className='icons'>
          <p>compass</p>
          <p className='heartIcon'>heart</p>
          <p>smiley</p>
        </div>
      </div>
    )
  }
}


export default SearchBar;
