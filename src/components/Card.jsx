import React from 'react';
import './styles/Card.css';

const Card = props => (
  <div className="card">
    <img className="banner" src={props.iconUrl} alt="" />
    <div className="cardTitle">
      <a href={props.linkUrl} className="link">
        {' '}
        {props.cardTitles}
        <span class="left" />
        <span class="right" />
      </a>
    </div>
    <div className="cardFlap flap1">
      <div className="cardDescription">{props.cardDescript}</div>
    </div>
    <div className="cardFlap flap2">
      <div className="cardActions">
        <a href="" className="bttn">
          Saiba mais
        </a>
      </div>
    </div>
  </div>
);

export default Card;
