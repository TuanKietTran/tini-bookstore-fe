import "./App.css";
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Book from './components/Book';
import Cart from './components/Cart';

const App : React.FC = () => {
  const [totalItem, setTotalItem] = React.useState(0);
  
  const handleAddToCart  = (value: number) => {
    setTotalItem(value);
  };

  return (
    <div className="">
      <Header quantity = {totalItem} />
      <Home/>
      {/* <Book totalItem={totalItem} onAddToCart={handleAddToCart}/> */}
      <Footer />
    </div>
  );
};

export default App;
