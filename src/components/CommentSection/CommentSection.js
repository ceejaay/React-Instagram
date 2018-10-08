import React from 'react';
const CommentSection = props => {
  return (
      <div>
      {props.comments.map((comment, index)=>{
        return <p key={index}>{comment.text}</p>
      })}
        <div>
          <form>
            <input placeholder='add a comment'></input>
            <p>...</p>
          </form>
        </div>
      </div>
      );
};

export default CommentSection;
