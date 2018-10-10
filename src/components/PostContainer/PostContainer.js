import React from 'react';
import CommentSection from '../CommentSection/CommentSection' 

import './postContainer.css'

const PostContainer = props => {
  return (
    <div className='postcontainer'>
     {props.dummyData.map((item)=>{
        return<div key={item.username}>
          <header>
            <img className='thumbnail' src={item.thumbnailUrl} />
            <p>{item.username}</p>
          </header>
          <div>
            <img src={item.imageUrl} alt={item.username} />
          </div>
          <CommentSection
             comments={item.comments}
             username={item.username}
             changeHandler={props.changeHandler}
             commentInput={props.commentInput}
             addNewComment={props.addNewComment}
          />
          <footer>
            <p className='footer-icons'>heart</p>
            <p className='footer-icons'>comment</p>
            <p className='footer-icons'>{item.likes}</p>
          </footer>
        </div>
      })}
    </div>
  );
};

export default PostContainer;
