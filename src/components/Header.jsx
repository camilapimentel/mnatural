import React from 'react';
import './styles/Header.css';
import Leaf from './Leaf';
import Search from './Search';

const Header = () => (
  <header>
    <div id="brand" />
    <div id="logo" />
    <div id="logo2" />
    <div className="middle-header">
      <Leaf className="servico">
        <a />
      </Leaf>
      <Leaf className="cursos">
        <a />
      </Leaf>
      <Leaf className="contato">
        <a>
          <img src="https://image.flaticon.com/icons/svg/43/43212.svg" alt="" />
        </a>
      </Leaf>
      <Leaf className="depoimentos">
        <a />
      </Leaf>
    </div>
    <Search />
  </header>
);
export default Header;
