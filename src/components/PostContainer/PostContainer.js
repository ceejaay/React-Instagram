import React from 'react';
import CommentSection from '../CommentSection/CommentSection' 
const PostContainer = props => {
  return (
      <div>
      {props.dummyData.map((item, index)=>{
        return <div  className='postcontainer' key={index}>
          <p>{item.username}</p>
          <p>{item.likes}</p>
          <p>{item.timestamp}</p>
          <img
            src={item.imageUrl}
            alt={item.username}
          />
          <CommentSection comments={item.comments}/>
        </div>


      })}
      </div>
      );
};

export default PostContainer;
