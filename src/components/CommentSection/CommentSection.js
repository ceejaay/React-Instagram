import React from 'react';
import PropTypes from 'prop-types';
import './commentSection.css'
const CommentSection = props => {
  return (
      <div className='commentsection'>
      {props.comments.map((comment, index)=>{
        return ( 
          <div className='comment'>
            <p className='commentUsername'>{comment.username}</p>
            <p key={index}>{comment.text}</p>
          </div>
        )
         })}
        <div>
        <div className='timestamp'>{props.timestamp}</div>
          <form>
            <input placeholder='add a comment'></input>
            <p>...</p>
          </form>
        </div>
      </div>
      );
};
CommentSection.propTypes = {
  comments: PropTypes.shape({
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
}
export default CommentSection;
