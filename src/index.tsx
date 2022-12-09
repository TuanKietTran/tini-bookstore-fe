import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Book from './components/Book';
import Cart from './components/Cart';

ReactDOM.render(
    <React.StrictMode>
      <Header />
      <Book/>
      <Footer />
    </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);