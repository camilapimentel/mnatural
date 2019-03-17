import React from 'react';
import './styles/Footer.css';
import Leaf from './Leaf';

const Footer = () => (
  <footer>
    <div className="social-content">
      <Leaf>
        <a className="instagram" href="" />
      </Leaf>
      <Leaf>
        <a className="facebook" href="" />
      </Leaf>
      <Leaf>
        <a className="email" href="" />
      </Leaf>
    </div>
    <div className="promo-content">
      <div className="procurados-header">
        <h2>Mais Procurados</h2>
      </div>
      <a className="servico1" href="">
        <h4>Peeling</h4>
        <img
          className="serv-img"
          src="http://mnatural.com.br/gallery_gen/8dd4ba6c8ede2857764d3cada398c2ad.jpg"
          alt="peeling"
        />
      </a>
      <a className="servico2" href="">
        Serviço 2
      </a>
      <a className="servico3" href="">
        Serviço 3
      </a>
      <a className="servico4" href="">
        Serviço 4
      </a>
    </div>
    <div className="depo-content">
      <a className="depoimento1" href="">
        Depoimento 1
      </a>
      <a className="depoimento2" href="">
        Depoimento 2
      </a>
      <a className="depoimento3" href="">
        Depoimento 3
      </a>
      <a className="depoimento4" href="">
        Depoimento 4
      </a>
    </div>
  </footer>
);

export default Footer;
