import React from 'react';
import './styles/Content.css';

const Content = props => (
  <main className="content">
    <h1>{props.title}</h1>
    {props.children}
  </main>
);

export default Content;
