import "./App.css";
import React from 'react'
import Navbar from './components/Navbar'
import Home from "./views/Home";

const App : React.FC = () => {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
};

export default App;
