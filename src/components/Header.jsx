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
      <Leaf
        linkUrl=""
        iconUrl="https://image.flaticon.com/icons/svg/823/823867.svg"
        linkName="Serviços"
      />
      <Leaf
        linkUrl=""
        iconUrl="https://image.flaticon.com/icons/svg/182/182321.svg"
        linkName="Cursos"
      />
      <Leaf
        linkUrl=""
        iconUrl="https://image.flaticon.com/icons/svg/1466/1466933.svg"
        linkName="Contato"
      />
      <Leaf
        linkUrl=""
        iconUrl="https://image.flaticon.com/icons/svg/149/149181.svg"
        linkName="Depoimentos"
      />
    </div>
    <Search />
  </header>
);
export default Header;
