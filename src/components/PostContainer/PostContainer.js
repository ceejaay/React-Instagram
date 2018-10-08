import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection' 

import './postContainer.css'

const PostContainer = props => {
  return (
    <div timestamp={props.timestamp}>
      {props.dummyData.map((item, index)=>{
        return <div  className='postcontainer' key={index}>
          <header>
            <img
              className='thumbnail'
              src={item.thumbnailUrl}
              alt='user thumbnail'
            />
            <p>{item.username}</p>
          </header>
          <img
            src={item.imageUrl}
            alt={item.username}
          />
          <footer>
            <div className='footer-icons'>
            <p className='icon'>♡</p>
            <p className='icon'>💬</p>
            <p>{item.likes} likes</p>
            </div>
            <CommentSection 
              comments={item.comments} 
              timestamp={item.timestamp}
            />
          </footer>
        </div>


      })}
    </div>
  );
};
PostContainer.propTypes = {
 dummyData: PropTypes.arrayOf(PropTypes.object),
}

export default PostContainer;
