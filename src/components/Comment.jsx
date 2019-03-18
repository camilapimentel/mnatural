import React from 'react';
import './styles/Comment.css';

const Comment = props => (
  <div className="comment">
    <a href={props.linkUrl} className="commentLink">
      <div className="imgTest">
        <img className="avatar" src={props.avatarUrl} alt="" />
      </div>
      <div className="contentComment">
        <h4 className="profileName">{props.textName}</h4>
        <h6 className="comment">{props.textComment}</h6>
      </div>
    </a>
  </div>
);

export default Comment;
