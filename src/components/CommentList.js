/* eslint-disable react/prop-types */
import React from 'react';
import Comment from './Comment';

function Comments({ comments }) {
  return (
    <ul className="comment-list">
      {comments && comments.map((comment, key) => <Comment data={comment} key={key}/>)}
    </ul>
  );
}

export default Comments;
