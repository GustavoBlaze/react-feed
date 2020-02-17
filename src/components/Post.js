/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

function Post({ post }) {
  const lines = post.content.split('\n');
  return (
    <li className="post">
      <div className="post-header">
        <img className="avatar" src={post.avatar} />
        <div className="details">
          <p className="name">{post.author}</p>
          <span className="date">{post.date}</span>
        </div>
      </div>
      <div className="post-body">
        {lines.map((line, key) => {
          return line ? <p key={key}>{line}</p> : <br key={key} />;
        })}
      </div>

      {post.comments && post.comments.length > 0 && (
        <CommentList comments={post.comments} />
      )}
    </li>
  );
}

Post.prototype = {
  post: PropTypes.object.isRequired,
};

export default Post;
