import React from 'react';
import CommentSection from '../CommentSection/CommentSection' 
const PostContainer = props => {
  return (
      <div>
        <div className='postHeadline'>
          <img
            alt="user icon"
          />
          <p>Username</p>
        </div>
        <div className='photo'>
          <img
            alt='photo'
          />
          <p>heart icon</p>
          <p>comment icon</p>
          <p>Eleventy-billion likes</p>
        </div>
        < CommentSection />
      </div>
      );
};

export default PostContainer;
