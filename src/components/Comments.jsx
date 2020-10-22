import React, { Component } from 'react';
import { loggedInUserId } from '../utils/constants';

class Comments extends Component {
  state = {
    comments: [
      { comment_id: 1, text: 'First!', authorId: 1 },
      { comment_id: 2, text: 'Memes memes and more memes...', authorId: 2 },
      {
        comment_id: 3,
        text:
          "Something really insightful and valuable that's been buried in the comments section, because who cares about that? More memes!",
        authorId: 2,
      },
    ],
  };

  componentDidMount() {
    // actually fetch the comments in here
  }

  deleteComment(commentIdToDelete) {}

  handleSubmit = (e) => {
    e.preventDefault();
    // api.Post() actually post it. .then(() => {
    const newComment = { comment_id: 4, text: 'Blah blah blah', authorId: 1 };
    this.setState((currState) => ({
      comments: [newComment, ...currState.comments],
    }));
  };

  render() {
    const { comments } = this.state;
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <textarea></textarea>
          <button>Post a comment</button>
        </form>
        <ul className="comments-list">
          {comments.map((comment) => (
            <li key={comment.comment_id} className="comments-container">
              <p>{comment.text}</p>
              <button
                disabled={comment.authorId !== loggedInUserId}
                onClick={() => this.deleteComment(comment.comment_id)}
              >
                Delete Comment
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Comments;
