import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'

ReactDOM.render(
    <React.StrictMode>
      <Header />
      <Home/>
      <Footer />
    </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);