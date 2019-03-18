import React from 'react';
import './styles/Footer.css';
import Leaf from './Leaf';
import Comment from './Comment';

const Footer = () => (
  <footer>
    <div className="social-content">
      <Leaf
        linkUrl="https://www.facebook.com/mnaturalestetica/"
        iconUrl="https://image.flaticon.com/icons/svg/1384/1384085.svg"
        linkName="Facebook"
      />
      <Leaf
        linkUrl="https://www.instagram.com/mnaturalestetica/"
        iconUrl="https://image.flaticon.com/icons/svg/109/109404.svg"
        linkName="Instagram"
      />
      <Leaf
        linkUrl=""
        iconUrl="https://image.flaticon.com/icons/svg/91/91848.svg"
        linkName="Email"
      />
    </div>
    <div className="promo-content">
      <div className="procurados-header">
        <h2>Mais Procurados</h2>
      </div>
      <div className="services">
        <a href="" className="serviceCell">
          <h4>Peeling</h4>
          <img
            className="serv-img"
            src="http://mnatural.com.br/gallery_gen/8dd4ba6c8ede2857764d3cada398c2ad.jpg"
            alt="peeling"
          />
        </a>
        <a href="" className="serviceCell">
          <h4>Micro pigmentação</h4>
          <img
            className="serv-img"
            src="http://mnatural.com.br/gallery_gen/60c678eae690d1dc8a09cfa45b444ae6.jpg"
            alt=""
          />
        </a>
        <a href="" className="serviceCell">
          <h4>Massoterapia</h4>
          <img
            className="serv-img"
            src="http://mnatural.com.br/gallery_gen/a05e84a0b71fda32980d471c3f866b95.jpg"
            alt=""
          />
        </a>
        <a href="" className="serviceCell">
          <h4>Depilação</h4>
          <img
            className="serv-img"
            src="http://mnatural.com.br/gallery_gen/1fd024a3b49589929b1f8383837551a7.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
    <div className="depo-content">
      <h2 className="headerComment">Últimos comentários</h2>
      <div className="commentBox">
        <Comment
          linkUrl=""
          avatarUrl="http://mnatural.com.br/gallery_gen/eab8ad59fd983d6b36fc1743ca8cf5f4.jpg"
          textName="Lara"
          textComment="Fiquei muito feliz com o atendimento, recomendo."
        />
        <Comment
          linkUrl=""
          avatarUrl="http://mnatural.com.br/gallery_gen/4059751816115ed31bdefd05dd921d39.jpg"
          textName="Gabriela"
          textComment="Arrasou! O Peeling facial que Marta faz é um salva-vidas."
        />
      </div>
    </div>
  </footer>
);

export default Footer;
