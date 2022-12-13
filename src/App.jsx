import "./App.css";
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Book from './components/Book';
import Cart from './components/Cart';
import Stationery from './components/Stationery'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Management from "./views/Management";


const App = () => {
  const [totalItem, setTotalItem] = React.useState((JSON.parse(localStorage.getItem('products')) || []).length > 0 ? (JSON.parse(localStorage.getItem('products')) || []).length : 0);
  const handleAddToCart  = (value) => {
    setTotalItem(value);
  };

  return (
    <div className="">
      <BrowserRouter>
        <Header quantity = {totalItem} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/book/:id" element={<Book totalItem={totalItem} onAddToCart={handleAddToCart}/>}/>
          <Route path="/stationery/:id" element={<Stationery totalItem={totalItem} onAddToCart={handleAddToCart}/>}/>
          <Route path="/cart" element={<Cart totalItem={totalItem} onAddToCart={handleAddToCart}/>}/>
          <Route path="/management" element={<Management/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
        


    </div>
  );
};

export default App;
