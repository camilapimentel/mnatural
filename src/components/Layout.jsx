import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import './styles/Layout.css';

const Layout = props => (
  <div className="layout-container">
    <Header />
    <Content title={props.title}>{props.children}</Content>
    <Footer />
  </div>
);

export default Layout;
