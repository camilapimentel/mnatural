import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Services from './pages/Services';
import * as serviceWorker from './serviceWorker';
import { Router } from '@reach/router';

ReactDOM.render(
  <Router>
    <Home path="/" />
    <Services path="services" />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
