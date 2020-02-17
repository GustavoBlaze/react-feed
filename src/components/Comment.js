import React from 'react';

export default function Comment({data}) {
  return (
    <li className="comment">
      <img className="avatar" src={data.avatar} />
      <p className="comment-content">
        <span className="name">{data.author}</span>
        {data.content}
      </p>
    </li>
  )
}