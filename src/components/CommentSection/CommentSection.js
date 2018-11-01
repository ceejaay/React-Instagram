import React from 'react';
// import PropTypes from 'prop-types';
import './commentSection.css'
import StyledButton from '../../styles.js'
class CommentSection extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        commentInput: ''
      }
  }
  
  changeHandler =(event) => {
    this.setState({commentInput: event.target.value})
  }

 addComment = (event) => {
   this.props.addNewComment(event, this.props.username, this.state.commentInput)
     this.setState({commentInput: ''})
 }

  render() {
  return (
      <div className='commentsection'>
      {this.props.comments.map((comment, idx)=>{
        return<div className='commentsection' key={idx}><p className='commentUsername'>{comment.username}</p><p className='comment'>{comment.text}</p>
        </div>
      })}
      <form onSubmit={this.addComment}>
        <input value={this.state.commentInput} onChange={this.changeHandler}></input>
        <StyledButton type={'primary'}  onClick={this.addComment}>...</StyledButton>
      </form>

      </div>
      );
  }
}


// CommentSection.propTypes = {
//   comments: PropTypes.shape({
//     text: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired
//   })
// }
export default CommentSection;
