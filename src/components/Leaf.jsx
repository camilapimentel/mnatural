import React from 'react';
import './styles/Leaf.css';

const Leaf = props => (
  <div className="leaf">
    <a href={props.linkUrl} className="link">
      <img className="icon" src={props.iconUrl} alt="" />
      <h4 className="name">{props.linkName}</h4>
    </a>
  </div>
);

export default Leaf;
