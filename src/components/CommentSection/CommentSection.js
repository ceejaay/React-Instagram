import React from 'react';
// import PropTypes from 'prop-types';
import './commentSection.css'
const CommentSection = props => {
  return (
      <div className='commentsection'>
      {props.comments.map((comment, index)=>{
        return ( 
          <div key={index} className='comment'>
            <p className='commentUsername'>{comment.username}</p>
            <p>{comment.text}</p>
          </div>
        )
         })}
        <div>
        <div
        className='timestamp'>{props.timestamp}
        </div>
          <form>
            <input 
              type='text' 
              onChange={props.changeHandler} 
              placeholder='add a comment'>
              {console.log(props.commentInput)}
            </input>
            <button onClick={props.addNewComment}>...</button>
          </form>
        </div>
      </div>
      );

};

// CommentSection.propTypes = {
//   comments: PropTypes.shape({
//     text: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired
//   })
// }
export default CommentSection;
